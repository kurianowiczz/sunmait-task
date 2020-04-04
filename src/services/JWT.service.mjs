import jwt from 'jsonwebtoken';
import config from '../config.mjs';

export default class JWTService {
    static async generateToken(data) {
        return jwt.sign(data, config.secretKey);
    }

    static async verifyToken(token) {
        try {
            return jwt.verify(token, config.secretKey);
        } catch (e) {
            return null;
        }
    }
}
