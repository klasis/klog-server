import Koa from 'koa';
import logger from 'koa-logger';
import router from './routes/index.js';
import jsDocs from './lib/middlewares/jsDocs.js';
import koaSwagger from './lib/koaSwagger.js';

const app = new Koa();

/* setup middlewares */
app.proxy = true;
// logger
app.use(logger());
// router
app.use(router.routes()).use(router.allowedMethods());
// API docs
app.use(jsDocs());
app.use(koaSwagger);

export default app;