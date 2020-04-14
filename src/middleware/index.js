const jwtService = require('../services/JWT.service');

module.exports = {
    isLogin: async (req, res, next) => {
        let token = req.header('token') || req.query['token'];
        if(!token) {
            return res.status(403).send('unauthorised user');
        }

        const user = await jwtService.verifyToken(token);
        if(!user) {
            return res.status(400).send('bad token');
        }
        req.user = user;
        next();
    },

    developerOnly: async (req, res, next) => {

    },

    managerOnly: async (req, res, next) => {

    },

};

