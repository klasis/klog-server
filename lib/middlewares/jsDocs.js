import swaggerJsdoc from "swagger-jsdoc";
import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('./package.json'));

const jsDocOptions = {
    failOnErrors: true,
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'KLOG API Docs',
            description: 'This page is api-docs for KLOG.',
            // termsOfService: 'https://www.klasis.com/terms',
            // contact: {
            //     name: 'API Support',
            //     url: 'https://www.klasis.com/support',
            //     email: 'support@klasis.com'
            // },
            // license: {
            //     name: "MIT License",
            //     identifier: 'MIT-License',
            //     url: "https://www.klasis.com/licenses"
            // },
            version: version
        }
    },
    apis: [
        './routes/*.js',
        './routes/**/*.js',
        './routes/**/**/*.js',
        './routes/**/**/**/*.js'
    ]
}

export default () => {
    return function jsDocs(ctx, next) {
        if (ctx.path === '/api/v1/docs.json') {
            const swaggerSpec = swaggerJsdoc(jsDocOptions);

            ctx.set('Content-Type', 'application/json');
            ctx.body = swaggerSpec;
        }

        return next();
    }
}