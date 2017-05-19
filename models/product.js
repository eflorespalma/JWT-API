'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise;
const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accesories'] },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)
