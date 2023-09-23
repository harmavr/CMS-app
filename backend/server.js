// server.js

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/postRoutes')
const server = express();
const cors = require('cors')

server.use(cors());
server.use(express.json());
server.use(routes);


mongoose.connect('mongodb://127.0.0.1:27017/databaseProject',{
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log("Database connected")
});



server.listen(3000, ()=>{
  console.log('Serving on port 3000!')
})