const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 13,
        trim: true
    },
    college: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    batch: {
        type: Number,
        required: true,
        minlength: 4
    },
    msc: {
        type: String,        
    },
    github: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    linkedin: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    work: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;