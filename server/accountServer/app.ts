import * as Koa from 'koa';
import * as BodyParser from 'koa-bodyparser';
import {Sequelize} from "sequelize-typescript";
import {accountConfig} from '../config/config';
import router from './router/userRouter';


const sequelize = new Sequelize({
    database: 'fish',
    dialect: 'mysql',
    username: 'root',
    password: 'shangxi1012',
    storage: ':memory:',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    query: {
        raw: true,
    },
    models: [__dirname + '/models'], // or [Player, Team],
});

const app: Koa = new Koa();

app.use(BodyParser());

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    if (ctx.method === 'OPTIONS') {
        ctx.body = '';
        ctx.status = 204;
    } else {
        await next();
    }
});

app
    .use(router.routes())
    .listen(accountConfig.port);
console.log(`server is 127.0.0.1:${accountConfig.port}`);
