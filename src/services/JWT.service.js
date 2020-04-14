const jwt = require('jsonwebtoken'),
    config = require('../config');

class JWTService {
    static async generateToken(data) {
        return jwt.sign(data, config.secretKey);
    }

    static async verifyToken(token) {
        try {
            const data = await jwt.verify(token, config.secretKey);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = JWTService;
