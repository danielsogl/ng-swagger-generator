#!/bin/bash
curl -o swagger.json https://petstore.swagger.io/v2/swagger.json
npx rimraf projects/api/src/lib
npx openapi-generator-cli generate --generator-key=pet-store-api
rm ./swagger.json
