import { DataSource } from 'typeorm';
console.log();
const dataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
});

dataSource.initialize()
.then(() => {
    console.log('[PostgreSQL] Data Source has been initialized.');
});