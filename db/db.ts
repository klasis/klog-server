import { DataSource } from 'typeorm';

const dataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    // synchronize: true,
    // logging: false,
    // entities: [Post],
    // migrations: [],
    // subscribers: []
});

dataSource.initialize().then(async () => {
    console.log('[PostgreSQL] Data Source has been initialized.');
}).catch(error => console.error(error));