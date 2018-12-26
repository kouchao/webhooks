import { BaseContext } from 'koa';
import * as execa from 'execa';

export default class webhooks {
  public static async trigger(ctx: BaseContext){
    await execa('cd', ['/root/nuxt-demo']);
    await execa('git', ['pull'])
    await execa('npm', ['i'])
    await execa('nuxt', ['build'])
    execa('pm2', ['restart', 'fe'])

    ctx.body = {
      code: 0
    }
  }
}