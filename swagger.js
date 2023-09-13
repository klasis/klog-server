import Koa from 'koa';
import swaggerJsdoc from 'swagger-jsdoc';
import { koaSwagger } from 'koa2-swagger-ui';

const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx.path);
    if (ctx.path === '/api/v2/docs.json') {
        const swaggerSpec = swaggerJsdoc({
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Title1',
                    version: '1.0.0',
                    description: 'Description1'
                }
            },
            apis: [
                './routes/*.js',
                './routes/**/*.js',
                './routes/**/**/*.js',
                './routes/**/**/**/*.js'
            ]
        });
        console.log(swaggerSpec);

        ctx.set('Content-Type', 'application/json');
        ctx.body = swaggerSpec;

        return;
    }

    return next();
});

app.use(
    koaSwagger({
        title: 'page title',
        oauthOptions: {},
        swaggerOptions: {
            url: '/api/v2/docs.json',
            supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
            docExpansion: 'none',
            jsonEditor: false,
            defaultModelRendering: 'schema',
            showRequestHeaders: false,
            swaggerVersion: '5.9.0',
            validatorUrl: null
        },
        routePrefix: '/api/docs',
        specPrefix: '',
        exposeSpec: false,
        hideTopbar: false,
        // favicon: '/favicon.png',
        // customCSS: ``
    })
);

function swagger() {
}

export default swagger;