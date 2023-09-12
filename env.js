import dotenv from 'dotenv';
import path from 'path';

const { MODE_ENV } = process.env;

dotenv.config({
    path: path.resolve(process.cwd(), MODE_ENV === 'development' ? '.env' : '.env')
});