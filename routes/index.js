import Router from '@koa/router';
import api from './api/index.js';

const router = new Router();

router.use('/api', api.routes());

/**
 * @swagger
 * /:
 *   get:
 *     summary: this is summary!
 *     description: this is description!
 *     operationId: getPetsById
 *     tags:
 *       - pets
 *       - dogs
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of pet to use
 *         required: true
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         style: simple
 *     responses:
 *       '200':
 *         description: returns a mysterious string
 *         content:
 *           'application/json':
 *             schema:
 *               type: array
 *               items:
 *       default:
 *         description: error payload
 *         content:
 *           'text/html':
 *             schema:
 *               type: integer
 */
router.get('/', (ctx, next) => {
    ctx.body = {
        message: 'hello world'
    };
});

export default router;