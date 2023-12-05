import { Request, Response } from 'express';
import dotenv from 'dotenv';

const express = require('express');
const router = express.Router();

dotenv.config();
const indexEnv = process.env;

const User = require(`../models/${ indexEnv.USE_DB }/users.ts`);

router.get('/', (req: Request, res: Response) => {
    const user = new User({
        name: 'Bill',
        email: 'noemail'
    }).save();


    res.send('GET');
});

module.exports = router;