import Mail = require('nodemailer/lib/mailer');

import { createTransport } from 'nodemailer';
import config from "../config";


//配置邮件
const transporter = createTransport({
  service: "QQ",
  auth: {
    user: config.email,
    pass: config.emailPass,
  }
});

// 发送邮件
const sendmail = (option: Mail.Options) => {
  option.from = config.email
  transporter.sendMail(option, function (error, info) {
    if (error) {
      console.log("fail: " + error);
    } else {
      console.log('  --> email ' + info.accepted.splice(','));
    }
  });
}

export default sendmail