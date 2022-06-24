const fastify = require('fastify')
const mongoose = require('mongoose')
const Restaurant = require("./Restaurant")
const app = fastify()
app.register(require('@fastify/formbody'))

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:<password>@restaurant.ortiv4r.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/restaurants"
const mongoUrl = "mongodb+srv://admin:6IlmIrhWMRWDvtcZ@restaurant.ortiv4r.mongodb.net/?retryWrites=true&w=majority"
/** connect to MongoDB datastore */
try {
    mongoose.connect(mongoUrl)
} catch (error) {
    console.error(error)
}

//Return all restaurants in the datastore
app.get("/api/restaurants", (request, reply) => {
    Restaurant.find({}, (err, restaurants) => {
        if(!err) {
            reply.send(restaurants)
        } else {
            reply.send({ error: err })
        }
    })
})

//Return a specific restaurant
app.get("/api/restaurants/:restaurantId", (request, reply) => {
    let restaurantId = request.params.restaurantId
    Restaurant.findById(restaurantId, (err, restaurant) => {
        if(!err) {
            reply.send(restaurant)
        } else {
            reply.send({ error: err })
        }
    })
})

//curl localhost:3000/api/restaurants -X POST --data "{'name': 'Tara Kitchen', 'style': 'Moroccan', 'address': '431 Liberty St, Schenectady, NY 12305', 'priceLevel':'2', 'recommend': 'Boneless Chicken Grilled', 'specialNote': 'Delicious'}"

//Add a new restaurant
app.post("/api/restaurants", (request, reply) => {
    let restaurant = request.body
    // let restaurant = new Restaurant();
    // restaurant.name = request.body.name
    // restaurant.style = request.body.style
    //console.log(request.body)
    console.log(restaurant)
    Restaurant.create(restaurant, (err, restaurant) => {
        if(!err) {
            reply.send(restaurant)
            console.log(restaurant)
        } else {
            reply.send({ error: err })
        }
    })
})

//Edit a restaurant
app.put("/api/restaurants/:restaurantId", (request, reply) => {
    let restaurantId = request.params.restaurantId
    let newRestaurantEdit = request.body
    Restaurant.findById(restaurantId, (err, restaurant) => {
        if(!err) {
            restaurant.name = newRestaurantEdit.name
            /*restaurant.style = newRestaurantEdit.style
            restaurant.address = newRestaurantEdit.address
            restaurant.priceLevel = newRestaurantEdit.priceLevel
            restaurant.recommend = newRestaurantEdit.recommend
            restaurant.specialNote = newRestaurantEdit.specialNote*/
            restaurant.save((er, savedRestaurant) => {
                if(!er) {
                    reply.send(savedRestaurant)
                } else {
                    reply.send(er)
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})

//Remove a restaurant
app.delete("/api/restaurants/:restaurantId", (request, reply) => {
    let restaurantId = request.params.restaurantId
    Restaurant.findById(restaurantId, (err, restaurant) => {
        if(!err) {
            restaurant.remove((er) => {
                if(!er) {
                    reply.send("RESTAURANT DELETED")
                } else {
                    reply.send({ error: er })
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})

// Start the server
app.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})