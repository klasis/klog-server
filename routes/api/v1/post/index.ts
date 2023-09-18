import Router from '@koa/router';

const post = new Router();

post.post('/posts', async ctx => {

});

post.get('/posts', async ctx => {

});

post.get('/posts/:postId', async ctx => {

});

post.put('/posts/:postId', async ctx => {

});

post.delete('/posts/:postId', async ctx => {

});

export default post;