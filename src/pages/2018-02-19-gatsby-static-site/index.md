---
title: Building Static Sites with Gatsby
date: "2018-02-19"
path: "/gatsby-static-sites"
published: false
---

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

Plugins are npm packages you can pull in to your gatsby project to solve website build tasks.  Plugins are load and configured by your gatsby-config.js file.  The three major classes of plugins are source, transform, and build.  Source plugins allow you to pull data from differents sources like a CMS, markdown files, or some API.  Transform plugins allow you to take a format of data like markdown, or JSON, and turn it into html.  Build plugins help you do your webpack type tasks like compiling SASS files.

## What is GraphQL

[GraphQL](http://graphql.org/) is a language for describing APIs of various kinds. In the context of Gatsby, it creates an interface between your data sources and your static site.  For the purpose of building a blog I'm using it to query my markdown files and build my static blog pages.  Gatsby has a fantasic live IDE built in for creating queries.  It can be found as follows.

```html
http://localhost:8000/___graphql
```

## Building a blog

Gatsby has a bunch of great starter projects from both Gatsby and the community.  Today we will take a look at the offical starter, [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).  To get started just type the following.

```powershell
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
```

This will create a directory called blog, clone the github repo and run npm install.  To start up the development server just type `gatsby dev`.

## Deployment & Hosting

There are a bunch of services you can host on such as Amazon S3, Netlify, GitHub Pages, Surge.sh.  I chose [Netlify](https://www.netlify.com/).  It's screaming fast, has built in continuous delivery, and free SSL using Let's Encrypt.

## Conclusion

Other use cases, react, fast