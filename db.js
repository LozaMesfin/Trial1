const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://loza:mongo_db@cluster0.b1vkq.mongodb.net/rooms'

//url parser and saftey parameter
mongoose.connect(mongoURL, {useUnifiedTopology: true , useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('MongoDB Connecton failed')
})

connection.on('connected', () =>{
    console.log('MongoDB connection is successful')
})

module.exports = mongoose