'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ShopSchema = Schema({
  name: String, 
  //picture: String, 
  //price: Number
  //category: {type: String, enum: ['', 'b', 'c']}, 
  //description: String
  //picture: String, 
  //price: Number,
  //category: {type: String, enum: ['a', 'b', 'c']}, 
  ////////////////description: String
})
module.exports = mongoose.model('Shop', ShopSchema)
