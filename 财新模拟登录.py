import requests
import execjs
import time

headers = {
    "authority": "gateway.caixin.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://u.caixin.com/",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82"
}

url = "https://gateway.caixin.com/api/ucenter/user/v1/loginJsonp"
account = "13537144943"
passwd = '123456'
encrypt_passwd = execjs.compile(open('财新登录.js', encoding='utf-8').read()).call('get_passwd', passwd)
params = {
    "account": account,
    "password": encrypt_passwd,
    "deviceType": "5",
    "unit": "1",
    "areaCode": "+86",
    "callback": f"__caixincallback{int(round(time.time()*1000))}"
}
session = requests.Session()
response = session.get(url, headers=headers, params=params)

print(response.text)
