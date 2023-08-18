import requests


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-EncKey": "KEb8ycxcpqwSrKy4ol7y3g==",
    "Accept-Language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Origin": "http://webapi.cninfo.com.cn",
    "Referer": "http://webapi.cninfo.com.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.79",
    "X-Requested-With": "XMLHttpRequest"
}
# cookies = {
#     "Hm_lvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1689236158",
#     "JSESSIONID": "FE32F641C0039E97FBD1D10CB7BAF773",
#     "Hm_lpvt_489bd07e99fbfc5f12cbb4145adb0a9b": "1689236179"
# }
url = "http://webapi.cninfo.com.cn/api/sysapi/p_sysapi1126"
params = {
    "@limit": "5"
}
response = requests.post(url, headers=headers, params=params, verify=False)

print(response.json())
