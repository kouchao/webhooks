const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const Router = require('koa-router');

const shell = require('shelljs');
const nodemailer = require('nodemailer');
const axios = require('axios');


//配置邮件
const transporter = nodemailer.createTransport({
	service: "QQ"
	, auth: {
		user: 'notice@jskou.com',
		pass: '',
	}
});
//发送邮件
const sendmail = (subject, html) => {
	const option = {
		from: "notice@jskou.com",
		to: "admin@jskou.com",
		subject,
		html

	}

	transporter.sendMail(option, function (error, info) {
		if (error) {
			console.log("fail: " + error);
		} else {
			console.log('  --> email ' + info.accepted.splice(','));
		}
	});
}

//发送钉钉
const sendDing = (platform, project) => {

	axios.post('',
		{
			msgtype: "text",
			text: {
				content: `${platform} 的 ${project} 已部署`
			}
		})

}

const router = Router()
const app = new Koa();

router.post('/github/vue-layui', (ctx) => {
	ctx.body = {
		code: 0
	}

	shell.cd('/root/vue-layui');
	shell.exec('git pull')
	shell.exec('npm i')
	shell.exec('npm run build')

	// sendmail('github', `<h3>${h3}</h3><p>${p}</p>`);

	sendDing('github', 'vue-layui')

})


router.post('/gitee/webhooks', (ctx) => {
	ctx.body = {
		code: 0
	}

	sendDing('gitee', 'webhooks')
	shell.cd('/root/webhooks');
	shell.exec('git pull')
	shell.exec('npm i')
	setTimeout(() => {
		shell.exec('pm2 restart webhooks')
	}, 10000)


})


app.use(cors())
app.use(logger())
app.use(bodyParser())

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);
