import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes/index';
import { jsDoc } from './lib/middlewares/jsDoc';
import koaSwagger from './lib/koaSwagger';

const app = new Koa();

/* setup middlewares */
app.proxy = true;
// logger
app.use(logger());
// router
app.use(router.routes()).use(router.allowedMethods());
// API docs
app.use(jsDoc);
app.use(koaSwagger);

export default app;