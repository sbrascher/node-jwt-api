'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    searchName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String
    },
    blocked: {
        type: Boolean,
        default: false
    },
    pendingInvitation: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', schema);