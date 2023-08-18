/*
1.首先请求https://captcha1.fengkongcloud.cn/ca/v1/conf 获得核心js的版本，请求参数会变的就两个:captchaUuid + callback
    1.1 captchaUuid ==> 时间+18位字母和数字组成的随机数(202307141538063JZrpi4P2z6wk3b3k2)
    1.2 callback ==> sm+13位时间戳(sm_1689320296576)

2.得到核心js代码地址后，再请求验证接口，变化请求参数如下
    2.1 captchaUuid ==> 上面已经获得
    2.2
 */


function generateTimeFormat() {
    var e = new Date()
    , t = function(n) {
        return +n < 10 ? "0" + n : n.toString();
    };
    return ((e.getFullYear().toString() + t(e.getMonth() + 1)) + t(e.getDate()) + t(e.getHours()) + t(e.getMinutes())) + t(e.getSeconds());
}

function getCaptchaUuid() {
    var c = "";
    var o = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    var s = o.length;
    for (var a = 0; a < 18; a++) {
        c += o.charAt(Math.floor(Math.random() * s));
    }
    return generateTimeFormat() + c;
}

// captchaUuid=时间+18位字母和数字组成的随机数
var captchaUuid = getCaptchaUuid()