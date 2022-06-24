# Favorite_Restaurants
Building a REST APIs with Fastify(NodeJS) and connect with MongoDB to interact with stored restaurant information
  
1. REST API architecture
2. NodeJS & Fastify web framework: https://www.fastify.io/ or Express: https://expressjs.com/
3. MangoDB database
  
  
  
/api/restaurants GET - Returns all restaurants in the datastore.
/api/restaurants/:restaurantId GET - Returns a specific restaurant.
/api/restaurants POST - Adds a new restaurant.
/api/restaurants/:restaurantId PUT - Edits a restaurant.
/api/restaurants/:restaurantId DELETE - Removes a restaurant.
  
  
  
Estimated finish time: 16 hours  
  
-a README to run the API server  
-run a sample request  
  
Other features:  
-add message validation: https://www.fastify.io/docs/v2.2.x/Validation-and-Serialization/  
-add a few happy path integration tests: https://jaywolfe.dev/tdd-a-mongodb-and-nodejs-api-with-integration-tests/  
-test performance with a simple load test utility: https://backend.cafe/how-to-test-a-fastify-application  
-generate documentation: https://github.com/fastify/fastify-swagger  
-generate a client SDK: ?  
-connect to a persistent datastore: https://www.npmjs.com/package/@now-ims/fastify-datastore  
  
Inspirations:  
https://blog.bitsrc.io/how-to-build-rest-apis-with-fastify-2eac64536a72  
https://www.educative.io/answers/how-to-build-rest-apis-with-fastify  

Important Definitions:
Fastify: Fastify is a high-performance HTTP web framework for Nodejs, inspired by Express.js and Hapi.js.