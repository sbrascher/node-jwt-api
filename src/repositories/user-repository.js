'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');
const Ws = mongoose.model('Ws');

exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

exports.getByEmail = async (email, fields) => {
    const res = await User.findOne({ email: email }, fields);
    return res;
}


exports.create = async (data) => {
    const model = new User(data);
    return await model.save();
}

exports.update = async (id, data) => {
    return await User.findByIdAndUpdate(id, { $set: data });
}

