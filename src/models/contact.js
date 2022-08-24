const mongoose = require('mongoose');

const contactSchema =  mongoose.schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    tel:{
        type: Number,
        required: true
    },
   
    message:{
        type: String,
        required: true
    }
}, {collection:'clients'});

module.exports= mongoose.model('Contact', contactSchema);