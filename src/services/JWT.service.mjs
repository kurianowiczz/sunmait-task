import jwt from 'jsonwebtoken';
import config from '../config.mjs';

export default class JWTService {
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
