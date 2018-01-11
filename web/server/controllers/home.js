
const KLine = require('../models/kLine')

const index = async (ctx) => {
  ctx.redirect('/dashboard');
};

const handle404 = async (ctx) => {
  await ctx.render('error/404', {
    title: ctx.__('errorPage.title'),
    text: ctx.__('errorPage.text'),
    redirectText: ctx.__('errorPage.redirectText')
  });
};

const dashboard = async (ctx) => {
  const datas = await KLine.findAll('btc2usdt_k5min');
  ctx.body = datas
};

module.exports = {
  index,
  handle404,
  dashboard
};
