import Router from '@koa/router';
import api from './api/index.js';

const router = new Router();

router.use('/api', api.routes());

router.get('/', (ctx, next) => {
    ctx.body = {
        message: 'hello world'
    };
});

export default router;