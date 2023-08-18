import requests
import json
import time
import execjs

headers = {
    "authority": "api.liumingye.cn",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://tools.liumingye.cn",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.79"
}
url = "https://api.liumingye.cn/m/api/search"
song = "晴天"
ts = int(round(time.time() * 1000))
token = execjs.compile(open('liumingye.js', encoding='utf-8').read()).call('get_token', ts, song)
print(token)

data = {
    "type": "YQM",
    "text": song,
    "page": 1,
    "v": "beta",
    "_t": ts,
    "token": token
}
data = json.dumps(data)
response = requests.post(url, headers=headers, data=data)
print(response.json())

