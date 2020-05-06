# Profound.js Swagger UI

This module, `profound.js-swagger-stats`, extends swagger-stats package as a dependency-free npm module.
This package is designed to only be used internally by the Profound.js Server Framework.

To get an absolute path to this directory for static file serving, use the exported `getAbsoluteFSPath` method:

```javascript
const swaggerStatsPath = require("profoundjs-swagger-stats").getAbsoluteFSPath()

```

For anything else, check the [Swagger-Stats](https://github.com/slanatech/swagger-stats) repository.
