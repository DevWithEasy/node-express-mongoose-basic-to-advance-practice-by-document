const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
      type : String,
      required : true
    },
    price:{
      type : Number,
      required : true
    },
    releaseDate:{
      type : Date,
      required : true,
      default : new Date()
    },
    specification : {
      ram : {
        type : Number,
        required : true
      },
      screen : {
        type : Number,
        required : true
      },
      cpu : {
        type : Number,
        required : true
      }
    },
    color : {
        type : Array,
        required : true,
        default : []
    },
    storage : {
        type : Array,
        required : true,
        default : []
    },
    comments : [
      {
        user : {
          type : mongoose.Types.ObjectId,
          ref : 'User'
        },
        comment : {
          type : String,
          required : true
        },
        time : {
          type : Date,
          default : new Date()
        }
      }
    ]

},{timestamps : true})

const Product = mongoose.model('Product',productSchema)
module.exports = Product
