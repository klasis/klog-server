import './env';
import app from './app';
import './db/db';
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