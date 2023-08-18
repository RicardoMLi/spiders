import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
    "Connection": "keep-alive",
    "Referer": "http://www.fangdi.com.cn/new_house/new_house_jjswlpgs.html",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.37"
}
cookies = {
    "www.fangdi.com_http_ic": "www.fangdi.com.cn_80_RS",
    "FSSBBIl1UgzbN7N80S": "UJxhw4ADcjeHaaeJwHfH0bxUl5hlj0W5mI2KilzPuju53Vjj7AMSJ.bHfehxLGRc",
    "FSSBBIl1UgzbN7N80T": "4uY3Z7G5uiBna88gH1uXldedU8ckeLFJQ26JJj3fXeA1.1UEAcDf2pBaxqrRea63aJ52cA5eqFHANAnxbNylQO1ErYTomg6gjXo_F0hebtitYbl5V7S8_3N16DTzNWBdKcjzugnkgc3FnSr78ihQelSoQAvk0ibT8vZFhkvG1YA.gYS8NStcEu0SyKNDmSmEjyX5ZhdHED0NMFa8e75e__vs.pGIWoaaDZTorKd4kADXnHc0GjGD9X_o0UIL66vgutztoiFWdfU_66NgAaFrfcZO0HHwNG8lJJq89.NJBw6__2.gAQ_q.NjCX8MaGwnmIHFKBuZdN2O0tZE7Vp3yB2Zws"
}
url = "http://www.fangdi.com.cn/new_house/new_house_jjswlpgs.html"
response = requests.get(url, headers=headers, cookies=cookies, verify=False)

with open('new_house.html', 'w', encoding='utf-8') as f:
    f.write(response.text)

