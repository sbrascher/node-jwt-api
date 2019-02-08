'use strict';

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = global.SALT_KEY;

exports.encrypt = async (texto) => {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(texto, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

exports.decrypt = async (texto) => {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(texto, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}