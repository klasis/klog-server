import { config } from 'dotenv';

const mongodb = require('./mongodb.ts');

config();

module.exports = () => {
    switch (process.env.USE_DB) {
        case 'mongodb':
            mongodb();
            break;

        default:
            break;
    }
}