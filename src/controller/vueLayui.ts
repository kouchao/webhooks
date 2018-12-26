import { BaseContext } from 'koa';
import * as shell from 'shelljs';

import DingDing from '../utils/DingDing';


export default class VueLayui {
  public static async trigger(ctx: BaseContext){
    shell.cd('/root/vue-layui')
    shell.exec('git pull')
    shell.exec('npm i')
    shell.exec('npm run build')
    // const option = {
    // 	to: "admin@jskou.com",
    // 	subject: 'github',
    // 	html: `<h3>${h3}</h3><p>${p}</p>`
    // }
    // sendmail(option)

    await DingDing.send('github', 'vue-layui')

    ctx.body = {
      code: 0
    }
  }
}