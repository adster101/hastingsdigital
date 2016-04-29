---
permalink: /blog/london-calling-redesign
title: London Calling re-design
date: 2016-03-08
tags: [performance,front-end-development,expression-engine]
---

After working with London Calling for a few months I was asked to implement a new responsive website design that they had commissioned via Tom Buttle Design. Until this point I had been maintaining and updating the existing site so this was definitely a much bigger chunk of work.

This post describes how I approached this site re-build detailing some of the more technical aspects of the build and highlighting some of the challenges faced.

I've been working with Jekyll quite a lot recently and it's great at generating static websites so I decided to build out a static representation of the new site before touching any of the expression engine templates or files. I recommend this approach as it frees you up from having to make changes to any dynamic template files before you (or your code) is ready. It's also much quicker and you can use tools live re-load to make the whole process slicker.

I acutally went one step further and inspired by this article -http://alistapart.com/article/from-pages-to-patterns-an-exercise-for-everyone - started by creating a component library / style guide. These are buzz words at the moment but again they really help in stating a build off on the right track as it minimised the risk of duplicated code or time consuming re-factoring early on in the process.  
