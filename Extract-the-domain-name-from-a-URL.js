/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// Answer:

function domainName(url){
  if (!url.includes('https://') && !url.includes('http://')) {
    url = `https://${url}`;
  }
  let host = new URL(url).host
  host = host.split('.').filter(e => e !== 'www').join('.')
  return host.slice(0,host.indexOf('.'))
  }

// BigO: O(n)
