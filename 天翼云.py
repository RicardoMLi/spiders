import requests
import time
import execjs


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://www.ctyun.cn",
    "Pragma": "no-cache",
    "Referer": "https://www.ctyun.cn/h5/auth/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "x-riskdevicesign": "03929c3cf3699a3b7eb09dfc34ca02f0"
}

url = "https://www.ctyun.cn/services/auth/Login"
params = {
    "locale": "zh-cn",
    "_t": f"{int(round(time.time()*1000))}"
}
username = "1234456@163.com"
passwd = '1234567'
encrypt_passwd = execjs.compile(open('天翼云.js', encoding='utf-8').read()).call('encrypt', username, passwd)
data = {
    "id": username,
    "loginType": "password",
    "password": encrypt_passwd,
    "loginFree": "false"
}

response = requests.post(url, headers=headers, params=params, data=data)
print(response.json())
