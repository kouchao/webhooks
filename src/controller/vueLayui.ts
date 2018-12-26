import { BaseContext } from 'koa';
import * as execa from 'execa';

import DingDing from '../utils/DingDing';


export default class VueLayui {
  public static async trigger(ctx: BaseContext){
    await execa('cd', ['/root/vue-layui'])
    await execa('git', ['pull'])
    await execa('npm', ['i'])
    await execa('npm', ['run', 'build'])
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