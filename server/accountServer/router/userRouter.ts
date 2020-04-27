import * as Router from 'koa-router';
import Users from "../models/users";

const router = new Router();


router.get('/', ctx => {
    ctx.body = ctx.query.a || '测试';
})

router.post('/login', async ctx => {
    console.log(ctx.request.body)


    const username = ctx.request.body.username.trim();
    const password = ctx.request.body.password.trim();
    const user: Users = await Users.findOne({
        where: {
            username,
            password
        }
    });
    console.log(user)
    if (!user) {
        return ctx.body = {
            errcode: -1,
            msg: '用户名或者秘密错误'
        }
    }
    ctx.body = {
        errcode: 0,
        msg: '登陆成功'
    }
});


router.get('/register', async ctx => {
    const username = ctx.query.username;
    const password = ctx.query.password;
    const nickname = ctx.query.nickname;
    if (!username) {
        return ctx.body = {
            errcode: -1,
            msg: '请输入用户名'
        }
    }

    const users = await Users.findOne({
        where: {
            username
        }
    });

    if (users) {
        return ctx.body = {
            errcode: -2,
            msg: '用户名已存在'
        }
    }

    const insert = Users.build({
        username,
        password,
        nickname,
    }).save()

    console.log(insert);
    ctx.body = {
        errcode: 0,
        msg: '注册成功'
    };


})

export default router;