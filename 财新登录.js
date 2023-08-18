const crypto = require('crypto-js')
function encrypt_passwd(t) {
    var e = crypto.enc.Utf8.parse("G3JH98Y8MY9GWKWG")
      , n = crypto.enc.Utf8.parse(t)
      , a = crypto.AES.encrypt(n, e, {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7
    });
    return encodeURIComponent(a.toString())
}

function get_passwd(t) {
    return encodeURIComponent(encrypt_passwd(t))
}
