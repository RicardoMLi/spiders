const CryptoJS = require('crypto-js')

//DES算法--加密
// var key = CryptoJS.enc.Utf8.parse("1234567890123456");
// var iv = CryptoJS.enc.Utf8.parse("1234567890123456");
// var encrypted = CryptoJS.DES.encrypt("Hello World", key, {
//   iv: iv,
//   mode: CryptoJS.mode.CBC,
//   padding: CryptoJS.pad.Pkcs7
// });
// console.log(encrypted.toString());
//
// //DES算法--解密
// var key = CryptoJS.enc.Utf8.parse("1234567890123456");
// var iv = CryptoJS.enc.Utf8.parse("1234567890123456");
// var decrypted = CryptoJS.DES.decrypt(encrypted, key, {
//   iv: iv,
//   mode: CryptoJS.mode.CBC,
//   padding: CryptoJS.pad.Pkcs7
// });
// console.log(decrypted.toString(CryptoJS.enc.Utf8));

//AES算法--加密
var key = CryptoJS.enc.Utf8.parse("G3JH98Y8MY9GWKWG");
var iv = CryptoJS.enc.Utf8.parse("123456");
var encrypted = CryptoJS.AES.encrypt("Hello World", key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
});
console.log(encrypted.toString());

// //AES算法--解密
// var key = CryptoJS.enc.Utf8.parse("12345678901234567890123456789012");
// var iv = CryptoJS.enc.Utf8.parse("1234567890123456");
// var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//   iv: iv,
//   mode: CryptoJS.mode.CBC,
//   padding: CryptoJS.pad.Pkcs7
// });
// console.log(decrypted.toString(CryptoJS.enc.Utf8));

