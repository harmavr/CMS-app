const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
});

module.exports = mongoose.model('posts', postSchema)