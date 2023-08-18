import requests
import time
import json

from lxml import etree

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6",
    "Connection": "keep-alive",
    "Content-Type": "text/plain",
    "Origin": "https://www.shanghai.gov.cn",
    "Referer": "https://www.shanghai.gov.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Microsoft Edge\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://ss.shanghai.gov.cn/manda-app/api/app/search/v1/1la94rh/search"
data = {
    "cid": "eLcoJMReLkZYeP2mzVlUkDda2Wi4v4JY",
    "uid": "eLcoJMReLkZYeP2mzVlUkDda2Wi4v4JY",
    "current": "7",
    "size": 20,
    "sort": "date:desc",
    "disable_correction": False,
    "filter": [
        "zt:市场经营主体生产活动"
    ],
    "facets": {
        "zt": [
            {
                "type": "value",
                "name": "zt",
                "sort": {
                    "count": "desc"
                },
                "size": 10
            }
        ]
    },
    "input_type": "Input"
}
filename = 'huangpu.txt'
session = requests.Session()


def write_detail(title, url):
    response = requests.get(url, headers=headers)
    html = etree.HTML(response.text)

    # 判断是否包含表格内容，如果包含表格直接return
    if html.xpath("//div[@id='ivs_content']/table"):
        print("文件内容包含表格，退出！！！")
        return

    content = html.xpath("//div[@id='ivs_content']/p/text()|//div[@id='ivs_content']/p/strong/text()|//div[@id='ivs_content']/p/span/text()")
    with open(filename, 'a', encoding='utf-8') as f:
        f.write(f'{title}如下：\n')
        for p in content:
            f.write(p.strip() + '\n')

        f.write('\n\n')


# 惠企政策一共34页，营商环境一共36页，市场经营主体生产活动一共7页
# 人口发展一共20页，招生入学一共17页，住房保障一共3页，养老服务一共1页
print(f"********正在处理第{data['current']}页********")
response = session.post(url, headers=headers, data=json.dumps(data))
response = response.json()

for item in response['result'].get('items'):
    title = item['title']['raw']

    if "图解" in title or "解读" in title or "一图读懂" in title:
        print("政策解读文件而非政策文件，跳过循环！！！")
        continue

    url = item['url']['raw']
    print(f'title is {title}, url is {url}, writing to huangpu.txt')
    write_detail(title, url)
    time.sleep(0.5)




