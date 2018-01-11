const fs = require('fs'),
path = require('path'),
koaRouter = require('koa-router'),
Home = require('../controllers/home')

const router = koaRouter();
const basename = path.basename(module.filename);

fs.readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) && (file.split('.').slice(-1)[0] ===  'js') && (file !== basename)
  )
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods());
  });

router.get(
  '/',
  Home.index
);
router.get('/404', Home.handle404);
router.get(
  '/dashboard',
  Home.dashboard
);


module.exports = router;
