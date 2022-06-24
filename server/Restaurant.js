const mongoose = require('mongoose')

let RestaurantSchema = new mongoose.Schema({
    name: String/*,
    style: String,
    address: String,
    priceLevel: Number,
    recommend: String,
    specialNote: String*/
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
