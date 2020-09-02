import requests
import json


def getUrl(url):
    link = requests.get(url)
    dictionary = json.loads(link.text)
    return dictionary

dictionary = getUrl('http://join.navgurukul.org/api/partners')
with open('partners.json','w') as f:
    json.dump(dictionary,f)

data = dictionary['data']

def nameNgo():
    for i in data:
        print(i['name'])

nameNgo()