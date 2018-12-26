import { BaseContext } from 'koa';
import * as shell from 'shelljs';
export default class webhooks {
  public static async trigger(ctx: BaseContext){
    shell.cd('/root/nuxt-demo');
    shell.exec('git pull')
    shell.exec('npm i')
    shell.exec('nuxt build')
    shell.exec('pm2 restart fe')

    ctx.body = {
      code: 0
    }
  }
}