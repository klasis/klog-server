import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes/index.js';

const app = new Koa();

/* setup middlewares */
app.proxy = true;
// logger
app.use(logger());
// router
app.use(router.routes()).use(router.allowedMethods());

// response
app.use(async ctx => {
    ctx.body = 'Hello World';
});

export default app;