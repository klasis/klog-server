import './env.js';
import app from './app.js';
// import { startClosing } from './lib/middlewares/keepAlive';
// import http from 'http';

const { PORT } = process.env;

app.listen(PORT, () => {
    process.send?.('ready');
});

process.on('SIGINT', function () {
    // startClosing();
    process.exit(0);
});