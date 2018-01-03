
require('./market/huobi');

function check() {
    console.log('============ Check =============');
    setTimeout(check, 100);
}

setTimeout(check, 3000);