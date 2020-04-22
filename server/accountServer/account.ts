import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

const app: Koa = new Koa();
const router = new KoaRouter();


router.get('/', ctx => {
    ctx.body = 1;
})


app.use(router.routes());

const start = function (config) {
    app.listen(config.port)
    console.log(`server is 127.0.0.1:${config.port}`);
};

export {start};