export interface Config {
  /* serve端口 */
  port: number;
  /* 邮箱 */
  email: string;
  /* 邮箱密码 */
  emailPass: string;
  /* 钉钉Hook */
  ddHook: string;
}

const config: Config = {
  port: 3002,
  email: '',
  emailPass: '',
  ddHook: ''
}

export default config