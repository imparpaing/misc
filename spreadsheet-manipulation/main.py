#!/usr/bin/env python

# Imports

import requests

# Program variables

url = 'https://stockx.com/nike-air-force-1-low-supreme-box-logo-white'
size = 13
productValue = 0

# Request headers

headers = {
    'Host': 'stockx.com',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Referrer': 'none',
    'Accept-Language': 'en-US,en;q=0.5',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '1'
}

# Program body

def main():
    r = requests.get(url, headers=headers)
    print(r.text)

if __name__ == '__main__':
    main()