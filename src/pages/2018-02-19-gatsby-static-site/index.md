---
title: Building Static Sites with Gatsby
date: "2018-02-19"
path: "/gatsby-static-sites"
published: false
---

# Building Static Sites with Gatsby

## What is Gatsby?
So I've purchased adampritzl.com and desided to create a website for my self to share what I learn with you.  I've heard static sites are the way to go so I did some searching and found [Gatsby](https://www.gatsbyjs.com).

Gatsby is a static site generator built on top of React.  You can bring your own data from various CMSs, markdown, and there is a big list of others.  The data is pulled in using prebuilt [plugins](https://www.gatsbyjs.org/docs/plugins/) and queried using GraphQL.

Since React is my front end framework of choice these days, it was the perfect fit.

## How does Gatsby work?

Since Gatsby is based on React, it uses components to create the website.  There are four major [components](https://www.gatsbyjs.org/docs/building-with-components/) that are used to build a Gatsby site.

* **Html** - This includes the html, head, and body tags
* **Layout** - This is an optional component that wraps page components.  It is used for things like headers, footers, and navigation
* **Page template** - This component is used for programmatically building pages.  For example, turning markdown into html pages.
* **Page** - Components build with these become pages on your site.

## Do I need to know Webpack?

In most cases you will not need to do any webpack configuration.  There are many prebuilt [plugins](https://www.gatsbyjs.org/docs/plugins/) that will do things like SASS processing, or adding TypeScript support.  If you find there is not a pluggin that solves your problem and it is a genral one, why not contribute back to the open source community and create a plugin.

## What are plugins?

## What is GraphQL

## Building a blog

