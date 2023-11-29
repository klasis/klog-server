const express = require('express');
const dotenv = require('dotenv');

// Router
const indexRouter = require('./routes/index');

// 환경 변수
dotenv.config();
const env = process.env;

const app = express();

// Router
app.use('/', indexRouter);

app.listen(env.SERVER_PORT, () => {
    console.log(`Server listening on port : ${ env.SERVER_PORT }`);
});