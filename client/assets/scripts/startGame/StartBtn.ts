import axios from 'axios';
import {config} from '../config/config'

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartBtn extends cc.Component {

    @property(cc.EditBox)
    username: cc.EditBox = null;

    @property(cc.EditBox)
    password: cc.EditBox = null;

    protected onLoad(): void {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)
    }

    public onClick(): void {
        // cc.director.loadScene('mainGame');
        console.log(111);

        console.log(this.username.string)
        console.log(this.password.string)

        // axios.get('http://127.0.0.1:8080/login', {
        //     params: {
        //         username: 'aaa',
        //         password: 123
        //     }
        // }).then(res => {
        //     console.log(res);
        // })

        axios.post(config.reqUrl + '/login', {
            username: this.username.string,
            password: this.password.string
        }).then(res => {
            console.log(res);
            if (res.data.errcode === 0){
                cc.director.loadScene('mainGame');
            }
        })
    }
}
