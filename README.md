[![Build Status](https://travis-ci.com/Ifiht/ifiht.github.io.svg?branch=master)](https://travis-ci.com/github/Ifiht/ifiht.github.io) 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/Ifiht/ifiht.github.io.git/develop-v3)


# ifiht-blog

A place for musings and reflections about computer science  :card_index: and interstellar travel :milky_way:

![screenshot](https://github.com/Ifiht/ifiht.github.io/blob/develop/content/images/cover-interstellar.png?raw=true)

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


## Commands

```sh
# working locally
npm run dev

# deploy to GitHub
npm run deploy

# generate build
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**
