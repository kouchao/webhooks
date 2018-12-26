import { BaseContext } from 'koa';
import * as shell from 'shelljs';

export default class webhooks {
  public static async trigger(ctx: BaseContext){
    shell.cd('/root/webhooks/dist')
    shell.exec('git pull')
    shell.exec('npm i')
    shell.exec('npm run build')
    shell.exec('pm2 restart webhooks')

    ctx.body = {
      code: 0
    }
  }
}