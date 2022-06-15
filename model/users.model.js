// Creating the Schema

// Importing Mongoose
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },

    lname:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    }
})

// Need to follow the schema
exports.module =  mongoose.model('user',UserSchema)