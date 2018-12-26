import * as Router from 'koa-router';
import controller = require('../controller');

const router = new Router();

router.post('/github/vue-layui', controller.vueLayui.trigger);
router.post('/github/webhooks', controller.webhooks.trigger);
router.post('/github/fe', controller.fe.trigger);

export { router };