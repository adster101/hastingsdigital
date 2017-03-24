---
title: Reducing page weight with flexbox FTW!
---

The site speed  is a critical aspect for any website or web app. With the advent of the mobile web comes the expectation that websites load quickly even instantly. Google et al published data indicating that the average page load time for mobile sites is 22s! Considering most people switch off after just 3s it's easy to see why conversion rates are so much lower on mobile sites. 

The problem is that making sites truly fast is difficult. Observing some common best practices for building speedy sites is a good start. One way to speed up a website is simply reducing the number of network requests by inlining as much CSS as possible in the document head. This website does just that. All the CSS the site needs to work is contained in the very HTML document meaning there are no additional network requests to download additional resources. 

This approach is fine until you want to add a new widget or feature to the site and eventually you realise that the inlined CSS is getting to large to be practical. The practical limite for a webpage over a mobile network is about 14Kb. 

