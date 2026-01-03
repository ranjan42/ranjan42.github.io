---
layout: post
title: "Building a Production-Grade API Gateway in Python"
date: 2026-01-03
categories: [python, system-design, microservices]
tags: [api-gateway, distributed-systems, architecture, python, rate-limiting, circuit-breaker]
---

# Building a Production-Grade API Gateway in Python

As microservices architecture continues to dominate modern software development, the API Gateway has become a critical component in distributed systems. In this post, I'll walk you through building a production-grade API Gateway in Python, covering essential patterns like rate limiting, circuit breakers, and load balancing.

## What is an API Gateway?

An API Gateway acts as a reverse proxy that sits between clients and backend microservices. It provides a single entry point for all client requests and handles cross-cutting concerns like:

- **Authentication & Authorization**
- **Rate Limiting**
- **Load Balancing**
- **Request/Response Transformation**
- **Circuit Breaking**
- **Logging & Monitoring**

## Architecture Overview

Here's the high-level architecture of our API Gateway:

```
Client → API Gateway → [Rate Limiter] → [Auth] → [Load Balancer] → Backend Services
                ↓
          [Circuit Breaker]
                ↓
          [Metrics & Logging]
```

## Core Components

### 1. Rate Limiter (Token Bucket with Sliding Window)

The rate limiter prevents abuse and protects backend services from being overwhelmed.

```python
class RateLimiter:
    """Token bucket rate limiter with sliding window"""
    
    def __init__(self, requests_per_minute: int = 60):
        self.requests_per_minute = requests_per_minute
        self.buckets: Dict[str, List[float]] = defaultdict(list)
        self.lock = threading.Lock()
    
    def is_allowed(self, client_id: str) -> bool:
        with self.lock:
            now = time.time()
            window_start = now - 60
            
            # Clean old requests outside the window
            self.buckets[client_id] = [
                ts for ts in self.buckets[client_id] if ts > window_start
            ]
            
            if len(self.buckets[client_id]) >= self.requests_per_minute:
                return False
            
            self.buckets[client_id].append(now)
            return True
```

**Key Features:**
- **Sliding window**: More accurate than fixed windows
- **Thread-safe**: Uses locks for concurrent access
- **Per-client tracking**: Enforces limits individually by client IP
- **Memory efficient**: Automatically cleans old timestamps

**Real-world application**: If you set a limit of 60 requests/minute, after the 60th request within a minute, the 61st request receives an HTTP 429 (Too Many Requests) response.

### 2. Circuit Breaker (Fault Tolerance)

The circuit breaker prevents cascading failures when backend services fail.

```python
class CircuitBreaker:
    """Circuit breaker pattern for fault tolerance"""
    
    class State(Enum):
        CLOSED = "CLOSED"      # Normal operation
        OPEN = "OPEN"          # Failing, reject requests
        HALF_OPEN = "HALF_OPEN"  # Testing recovery
    
    def __init__(self, failure_threshold: int = 5, timeout: int = 60):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failure_count = 0
        self.state = self.State.CLOSED
```

**How it works:**

1. **CLOSED**: Normal operation, requests flow through
2. After **5 failures** → Circuit opens
3. **OPEN**: All requests fail immediately (fast-fail)
4. After **60 seconds** → Transition to HALF_OPEN
5. **HALF_OPEN**: Test with one request
   - Success → Back to CLOSED
   - Failure → Back to OPEN

**Why it matters**: Without circuit breakers, a failing backend can cause cascading failures across your entire system. The circuit breaker gives the failing service time to recover.

### 3. Load Balancer (Round-Robin)

Distributes traffic across multiple backend instances for high availability.

```python
class LoadBalancer:
    """Round-robin load balancer with health checks"""
    
    def __init__(self, backends: List[str]):
        self.backends = backends
        self.current_index = 0
        self.healthy_backends = set(backends)
    
    def get_backend(self) -> Optional[str]:
        with self.lock:
            if not self.healthy_backends:
                return None
            
            healthy_list = list(self.healthy_backends)
            backend = healthy_list[self.current_index % len(healthy_list)]
            self.current_index = (self.current_index + 1) % len(healthy_list)
            return backend
```

**Algorithm**: Simple round-robin rotation
- Request 1 → Backend A
- Request 2 → Backend B
- Request 3 → Backend C
- Request 4 → Backend A (cycle repeats)

**Production enhancements** could include:
- Weighted round-robin (more traffic to powerful servers)
- Least connections (route to least busy server)
- Health check pings

### 4. Authentication Service

Token-based authentication for securing protected endpoints.

```python
class AuthService:
    """JWT-like authentication service"""
    
    def generate_token(self, user_id: str, expiry_minutes: int = 60) -> str:
        token_data = {
            "user_id": user_id,
            "expires_at": (datetime.now() + timedelta(minutes=expiry_minutes)).isoformat()
        }
        token = hashlib.sha256(
            f"{user_id}{self.secret}{token_data['expires_at']}".encode()
        ).hexdigest()
        self.tokens[token] = token_data
        return token
    
    def validate_token(self, token: str) -> Optional[Dict]:
        if token not in self.tokens:
            return None
        
        token_data = self.tokens[token]
        expires_at = datetime.fromisoformat(token_data["expires_at"])
        
        if datetime.now() > expires_at:
            del self.tokens[token]
            return None
        
        return token_data
```

**In production**, you'd use:
- Actual JWT libraries (PyJWT)
- Integration with OAuth2/OpenID Connect
- Token refresh mechanisms
- Public/private key signing

## Request Processing Pipeline

Every incoming request flows through this pipeline:

```
1. Route Matching    → Is this path registered?
2. Authentication    → Is the user authorized?
3. Rate Limiting     → Has the client exceeded quota?
4. Load Balancing    → Which backend should handle this?
5. Circuit Breaking  → Is the backend healthy?
6. Forward Request   → Send to backend service
7. Response          → Return to client
```

Here's the main request handler:

```python
def handle_request(self, request: Request) -> Response:
    """Main request handling pipeline"""
    self.request_count += 1
    start_time = time.time()
    
    # Step 1: Route matching
    if request.path not in self.routes:
        return Response(status_code=404, body={"error": "Route not found"})
    
    route = self.routes[request.path][request.method]
    
    # Step 2: Authentication
    if route.auth_required:
        user_data = self._authenticate(request)
        if not user_data:
            return Response(status_code=401, body={"error": "Unauthorized"})
    
    # Step 3: Rate limiting
    rate_limit_response = self._apply_rate_limiting(request, route)
    if rate_limit_response:
        return rate_limit_response
    
    # Step 4: Load balancing
    backend = self._select_backend(route)
    if not backend:
        return Response(status_code=503, body={"error": "No healthy backends"})
    
    # Step 5: Forward to backend (with circuit breaker protection)
    response = self._forward_to_backend(request, backend)
    
    # Add observability metrics
    duration = time.time() - start_time
    response.headers["X-Response-Time"] = f"{duration:.3f}s"
    
    return response
```

## Usage Example

Here's how you'd configure and use the gateway:

```python
# Initialize gateway
gateway = APIGateway()

# Register a public endpoint
gateway.register_route(Route(
    path="/api/public",
    method=HTTPMethod.GET,
    backend="backend1:8001",
    auth_required=False
))

# Register a protected endpoint with rate limiting
gateway.register_route(Route(
    path="/api/users",
    method=HTTPMethod.GET,
    backend="backend2:8002",
    auth_required=True,
    rate_limit=10  # 10 requests per minute
))

# Register a load-balanced endpoint
gateway.register_load_balanced_route(
    path="/api/products",
    method=HTTPMethod.GET,
    backends=["backend3:8003", "backend4:8004", "backend5:8005"],
    rate_limit=100
)

# Handle incoming request
request = Request(
    method=HTTPMethod.GET,
    path="/api/users",
    headers={"authorization": "Bearer token123"}
)
response = gateway.handle_request(request)
```

## Design Decisions & Trade-offs

### Thread Safety
All shared state uses `threading.Lock()` to prevent race conditions when handling concurrent requests. This is critical in production where thousands of requests hit simultaneously.

### Scalability Considerations
This implementation is designed for a single instance. For Google-scale systems, you'd need:

- **Distributed Rate Limiting**: Use Redis instead of in-memory storage
- **Service Mesh Integration**: Istio, Linkerd for advanced traffic management
- **Async I/O**: Replace threading with `asyncio` for better performance
- **Distributed Tracing**: OpenTelemetry for request tracking across services
- **Centralized Configuration**: Consul, etcd for dynamic route updates

### Error Handling
The gateway implements graceful degradation:
- Circuit breakers prevent cascading failures
- Proper HTTP status codes (401, 429, 503)
- Structured logging for debugging
- Metrics collection for monitoring

## Performance Metrics

The gateway tracks key metrics:

```python
{
  "total_requests": 1247,
  "total_errors": 23,
  "error_rate": 0.018,
  "circuit_breakers": {
    "backend1:8001": "CLOSED",
    "backend2:8002": "OPEN"
  }
}
```

## Testing the Gateway

Here's a simple test demonstrating all features:

```python
# Test 1: Public endpoint
req = Request(method=HTTPMethod.GET, path="/api/public")
resp = gateway.handle_request(req)
# Expected: 200 OK

# Test 2: Protected endpoint without auth
req = Request(method=HTTPMethod.GET, path="/api/users")
resp = gateway.handle_request(req)
# Expected: 401 Unauthorized

# Test 3: With valid auth token
token = gateway.auth_service.generate_token("user123")
req = Request(
    method=HTTPMethod.GET,
    path="/api/users",
    headers={"authorization": f"Bearer {token}"}
)
resp = gateway.handle_request(req)
# Expected: 200 OK

# Test 4: Rate limiting
for i in range(12):
    resp = gateway.handle_request(req)
    if resp.status_code == 429:
        print(f"Rate limited after {i} requests")
```

## Production Enhancements

To take this to production, you'd want to add:

1. **TLS Termination**: Handle HTTPS at the gateway
2. **Request Validation**: Schema validation, input sanitization
3. **Response Caching**: Cache frequently accessed data
4. **WebSocket Support**: For real-time connections
5. **gRPC Support**: For internal service communication
6. **API Versioning**: Handle multiple API versions
7. **Request Transformation**: Modify requests/responses
8. **IP Whitelisting**: Restrict access by IP
9. **DDoS Protection**: Advanced rate limiting, traffic analysis
10. **Health Checks**: Active monitoring of backend services

## Lessons Learned

Building this API Gateway taught me several valuable lessons:

1. **Concurrency is Hard**: Thread safety requires careful design
2. **Observability is Critical**: Without metrics, you're flying blind
3. **Fail Fast**: Circuit breakers are essential for system resilience
4. **Simplicity Wins**: Start with simple patterns, add complexity as needed
5. **Test Under Load**: Performance characteristics change at scale

## Conclusion

An API Gateway is more than just a reverse proxy—it's the backbone of modern microservices architecture. By implementing patterns like rate limiting, circuit breaking, and load balancing, you can build resilient, scalable systems.

The complete source code is available on my [GitHub repository](https://github.com/ranjan42/api-gateway-python).

## Further Reading

- [Circuit Breaker Pattern - Martin Fowler](https://martinfowler.com/bliki/CircuitBreaker.html)
- [API Gateway Pattern - Microsoft](https://docs.microsoft.com/en-us/azure/architecture/microservices/design/gateway)
- [Rate Limiting Strategies - Cloudflare](https://blog.cloudflare.com/counting-things-a-lot-of-different-things/)

---

*Have questions or suggestions? Feel free to reach out or leave a comment below!*
