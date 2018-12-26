import { BaseContext } from 'koa';
import * as execa from 'execa';

export default class webhooks {
  public static async trigger(ctx: BaseContext){
    await execa('cd', ['/root/webhooks/dist'])
    await execa('git', ['pull'])
    await execa('npm', ['i'])
    await execa('tsc');
    execa('pm2', ['restart', 'webhooks'])

    ctx.body = {
      code: 0
    }
  }
}