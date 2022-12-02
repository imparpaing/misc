#!/usr/bin/env python

# Imports

from bs4 import BeautifulSoup

import requests

# Program variables

base_url = 'https://stockx.com/nike-air-force-1-low-supreme-box-logo-white'
base_size = 14

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

def form_url():
    url = base_url + '?size=' + str(base_size)
    return url

def request_page_content(url):
    r = requests.get(url, headers=headers)
    page_content = r.text
    return page_content

def process_page_content(html):
    soup = BeautifulSoup(html, "html.parser")
    find_pid = soup.find_all("div", {"class": "chakra-container css-vp2g1e"})

    # Save product info
    product_brand = ""
    product_model = ""
    product_sku = ""
    product_price = ""

    # Write content to file
    f = open("content.txt", "w")
    # ...

    print(find_pid, file=f)

    # Close the file
    f.close()

def main():
    url = form_url() # Form request URL to the product page
    html = request_page_content(url) # Send request to the URL and get page content
    process_page_content(html)
    
if __name__ == '__main__':
    main()