import hashlib
import hmac


# sha1算法
"""
JavaScript实现, const crypto = require('crypto-js')
function sha1(data) {
  const sha1 = crypto.createHash('sha1');
  sha1.update(data);
  return sha1.digest('hex');
}

"""
def sha1(data):
    sha1 = hashlib.sha1()
    sha1.update(data.encode('utf-8'))
    return sha1.hexdigest()


# sha256算法
"""
function sha256(data) {
  const sha256 = crypto.createHash('sha256');
  sha256.update(data);
  return sha256.digest('hex');
}
"""
def sha256(data):
    sha256 = hashlib.sha256()
    sha256.update(data.encode('utf-8'))
    return sha256.hexdigest()


# sha512算法
"""
function sha512(data) {
  const sha512 = crypto.createHash('sha512');
  sha512.update(data);
  return sha512.digest('hex');
}
"""
def sha512(data):
    sha512 = hashlib.sha512()
    sha512.update(data.encode('utf-8'))
    return sha512.hexdigest()


# md5算法
"""
function md5(data) {
  const md5 = crypto.createHash('md5');
  md5.update(data);
  return md5.digest('hex');
}
"""
def md5(data):
    md5 = hashlib.md5()
    md5.update(data.encode('utf-8'))
    return md5.hexdigest()


# hmac算法
"""
function hmac_sha256(key, data) {
  const hmac_sha256 = crypto.createHmac('sha256', key);
  hmac_sha256.update(data);
  return hmac_sha256.digest('hex');
}
"""
def hmac_sha256(key, data):
    hmac_sha256 = hmac.new(key.encode('utf-8'), data.encode('utf-8'), hashlib.sha256)
    return hmac_sha256.hexdigest()
