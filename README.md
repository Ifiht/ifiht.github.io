[![Build Status](https://travis-ci.org/maxpou/gatsby-starter-morning-dew.svg?branch=master)](https://travis-ci.org/maxpou/gatsby-starter-morning-dew) [![Netlify Status](https://api.netlify.com/api/v1/badges/d68027bd-19b5-44fd-a2a3-d1f05fc8201e/deploy-status)](https://app.netlify.com/sites/gatsby-starter-morning-dew/deploys) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Maintainability](https://api.codeclimate.com/v1/badges/e09f1ac1a5cdb2987a6f/maintainability)](https://codeclimate.com/github/maxpou/gatsby-starter-morning-dew/maintainability) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# Ifiht's Blog

 :seedling: A place for musings and reflections about computer science :card_index: and interstellar travel :rocket: 

![screenshot](https://i.imgur.com/nPthSQy.png)

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized
- :love_letter: Write posts/pages in Markdown or [MDX](https://mdxjs.com/)
  - :art: Code syntax highlight
  - :books: Multilang support/i18n (blog post)
- :iphone: Mobile Friendly (Responsive design)
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support 
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v5](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :bird: post preview image generation (Twitter, Facebook...)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

## Commands

```sh
# working locally
npm run dev

# generate build
npm run build

# publish to GitHub
npm run deploy

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxpou/gatsby-starter-morning-dew)