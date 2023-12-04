import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

module.exports = () => {
    try {
        connect(<string>process.env.DB_HOST, {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            dbName: process.env.DB_NAME
        })
            .then(() => {
                console.log(`MongoDB is connected : ${ process.env.DB_HOST }`);
            });
    } catch (err) {
        console.error(`MongoDB is NOT connected : ${ err }`);
    }
}