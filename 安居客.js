
// url: https://api.anjuke.com/web/general/captchaNew.html?

var crypto = require('crypto-js')
function TMP(_oJg) {
    var _map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    for (var _IRC = _oJg['words'], _onW = _oJg['sigBytes'], _0l0 = _map, _0tH = (_oJg['clamp'](),
    []), _3YV = 0; _3YV < _onW; _3YV += 3)
        for (var _ESV = (_IRC[_3YV >>> 2] >>> 24 - _3YV % 4 * 8 & 255) << 16 | (_IRC[_3YV + 1 >>> 2] >>> 24 - (_3YV + 1) % 4 * 8 & 255) << 8 | _IRC[_3YV + 2 >>> 2] >>> 24 - (_3YV + 2) % 4 * 8 & 255, _Yqz = 0; _Yqz < 4 && _3YV + .75 * _Yqz < _onW; _Yqz++)
            _0tH['push'](_0l0['charAt'](_ESV >>> 6 * (3 - _Yqz) & 63));

    var _Au9 = _0l0['charAt'](64);
    if (_Au9)
        for (; _0tH['length'] % 4; )
            _0tH['push'](_Au9);

    return _0tH['join']('');
}

//dInfo字段加密代码
function encrypt(_cRV, _2undefinedp) {
    _2undefinedp = _2undefinedp.split("").reduce(function(_PUi, _JrX, _JP9) {
        if (true + 1 + undefined) {
            var _0xl8pp = 87 & 393 << 237;
        } else
            return _JP9 % 2 == 0 ? _PUi + "" : _PUi + _JrX;
    }, ""),
    _2undefinedp = crypto.enc.Utf8.parse(_2undefinedp),
    _cRV = JSON.stringify(_cRV),
    _cRV = crypto.AES.encrypt(_cRV, _2undefinedp, {
        iv: _2undefinedp,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    }),
    _2undefinedp = TMP(_cRV["ciphertext"]);
    return (0, encodeURIComponent)(_2undefinedp);
}

var obj = {
    sdkv: "3.0.1",
    busurl: "https://api.anjuke.com/web/general/captchaNew.html?",
    useragent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    cid: undefined,
    devicefg: undefined,
    clienttype: "1"
}

// 在captchaNew.html里面
var sessionId = '072b1cbdf83f4e3a9b82e1b8623d69f4'

// console.log(encrypt(obj, sessionId))


//data字段加密
var _Ug0 = {
    // x是缺口，track是轨迹，p是一个有两个0的数组
    x: 31 || 0,
    track: '37,33,0|38,33,16|39,33,23|40,33,31|41,31,40|43,31,56|44,31,64|45,31,72|47,31,80|50,30,87|52,29,97|56,29,104|58,28,112|60,28,120|62,28,128|63,28,135|65,27,143|66,27,184|68,27,264|68,27,271|',
    p: [0, 0]
}
console.log(encrypt(_Ug0, sessionId))


