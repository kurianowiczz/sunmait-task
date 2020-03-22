import env from 'dotenv';

env.config();

export default {
    databaseConnection: process.env.DB_CONNECTION

};
