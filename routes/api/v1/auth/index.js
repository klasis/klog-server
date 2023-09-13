import Router from '@koa/router';

const auth = new Router();

auth.post('/sendMail', async ctx => {

});

auth.get('/verifyMail/:code', async ctx => {

});

auth.post('/register/local', async ctx => {

});

auth.get('/logout', async ctx => {

});

export default auth;