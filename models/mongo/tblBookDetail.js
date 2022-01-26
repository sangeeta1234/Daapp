const mongoose = require('mongoose');
const { Schema } = mongoose;

const tblBookDetailSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    published: {
        type: String,
        required: true,
        trim: true
    }
});

const tblBookDetail = mongoose.model('book_details', tblBookDetailSchema,'book_details');

module.exports = tblBookDetail;
