import { koaSwagger } from "koa2-swagger-ui";

const koaSwaggerOptions = {
    title: 'KLOG - API DOCS',
    oauthOptions: {},
    swaggerOptions: {
        url: '/api/v1/docs.json',
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
    hideTopbar: true,
    // favicon: '/favicon.png',
    // customCSS: ``
}

export default koaSwagger(koaSwaggerOptions);