import Router from '@koa/router';
import auth from './auth/index.js';

const v1 = new Router();

v1.get('/check', ctx => {
    ctx.body = {
        version: 'v1'
    };
});

v1.use('auth', auth.routes());

export default v1;