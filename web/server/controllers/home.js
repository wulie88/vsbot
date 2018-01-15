
const KLine = require('../models/kLine')

const index = async (ctx) => {
  ctx.redirect('/index.html');
};

const handle404 = async (ctx) => {
  await ctx.render('error/404', {
    title: ctx.__('errorPage.title'),
    text: ctx.__('errorPage.text'),
    redirectText: ctx.__('errorPage.redirectText')
  });
};

const kline = async (ctx) => {
  const query = ctx.request.query
  const datas = await KLine.findAll(query.symbol+'_k5min');
  ctx.body = datas
};

module.exports = {
  index,
  handle404,
  kline
};
