#!/usr/bin/env python

# Imports
import re

import requests as r
from bs4 import BeautifulSoup


def returnHandleAvailability():
    lookupHandleUrl = "https://www.twitter.com/"
    loadSite = r.get(lookupHandleUrl)
    soup = BeautifulSoup(loadSite.content, "html.parser")
    searchForTag = soup.find("meta", attrs={"name":"apple-mobile-web-app-title"})

    # Exctracting site title
    pattern = r'"(.+?)"' # First element between two parenthesis ("<element>")
    result = re.search(pattern, str(searchForTag))
    return result.group(1)

def main():
    siteTitle = returnHandleAvailability()
    print(siteTitle)

if __name__ == "__main__":
    main()
