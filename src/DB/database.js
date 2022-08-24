const mongoose = require('mongoose');

const URI="mongodb+srv://SibuleleMd:82548822@cluster0.0rt6ioo.mongodb.net/Clients?retryWrites=true&w=majority";

const connectDB = () => {

    mongoose.connect(process.env.URI || URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    const db = mongoose.connection;
    // mongoose.Promise === global.Promise;

    db.on('error', (err) =>{
    console.log(err)
    });

    db.once('open', () => {
    console.log('connection to database established');
    });
    console.log('Database has been started!')
};

module.exports =connectDB;
