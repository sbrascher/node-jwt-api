const userRepository = require('../repositories/user-repository');
const userService = require('../services/user-service');
const ValidationContract = require('../validators/fluent-validator');

const config = require('../config');


var map = function (user) {
    return {
        id: user._id,
        name: user.name,
        email: user.email
    };
}


exports.updateName = async (req, res, next) => {
    try {
        let data = {
            name: req.body.name,
            search_name: accents.remove(req.body.name).toLowerCase()
        };

        let user = await userRepository.update(req.body.user.id, data);

        res.status(200).send({});

    } catch (ex) {
        res.status(500).send({});
    }
}