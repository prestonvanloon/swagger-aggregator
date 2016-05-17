# swagger-aggregator

[![Build Status](https://travis-ci.org/prestonvanloon/swagger-aggregator.svg?branch=master)](https://travis-ci.org/prestonvanloon/swagger-aggregator)
[![Coverage Status](https://coveralls.io/repos/github/prestonvanloon/swagger-aggregator/badge.svg?branch=master)](https://coveralls.io/github/prestonvanloon/swagger-aggregator?branch=master)

swagger-aggregator is a tool to merge multiple swagger REST API schemas into one schema.

This is helpful if you are using an API Gateway approach to your REST API.

# Example Usage

swagger.yaml

```yaml
swagger: '2.0'
info:
  version: "1.0.0"
  title: "API Gateway"
  description: This swagger file was aggregated using swagger-aggregator!

basePath: /v2

x-apis:
    pet: https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore.yaml
    uber: https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/uber.json
    trains: local/file/trains.yaml
```

The `x-apis` property is the list of external or local schemas to aggregate.

To use `swagger-aggregator`, simply require it and pass the file name to aggregate. `swagger-aggregator` returns a promise with the JSON object result.

```
 npm install --save-dev swagger-aggregator
```

```javascript
  const aggregator = require('swagger-aggregator');
  const fs = require('fs');

  module.exports = function() {
    return aggregator('swagger.yaml')
      .then(result => {
        fs.writeFileSync('dist/aggregated.json', JSON.stringify(result));
      });
  };

```
