---
paths:
  - "app/api/**/*.ts"
---
<!-- owner: @koldovsky · review-by: 2027-02-19 -->
# API errors (local copy — shop-web version)

- BFF errors are JSON `{ "error": "<message>" }`.
- Upstream failure → 502. Validation → 400. Business rule → 409.
