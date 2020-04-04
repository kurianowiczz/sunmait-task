import env from 'dotenv';

env.config();

export default {
    port: process.env.PORT,
    databaseConnection: process.env.DB_CONNECTION,
    secretKey: process.env.SECRET_KEY,

};
