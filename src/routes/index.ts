import * as Router from 'koa-router';
import controller = require('../controller');

const router = new Router();

router.get('/github/vue-layui', controller.vueLayui.trigger);
router.get('/gitee/webhooks', controller.webhooks.trigger);
router.get('/github/fe', controller.fe.trigger);

export { router };