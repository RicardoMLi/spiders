const crypto = require('crypto-js')

function encrypt_passwd(passwd, key) {
    return crypto.MD5(crypto.MD5(passwd).toString().substr(8, 16) + key).toString()
}