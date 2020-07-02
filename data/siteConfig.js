module.exports = {
  siteTitle: 'ifiht-blog',
  siteDescription: 'A place for musings and reflections about computer science and interstellar travel',
  authorName: 'Michael ____',
  twitterUsername: 'abcdef',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Michael ____ is a security-conscious, technologically minded carbon-based lifeform seeking efficiency and higher-
  order solutions to a stochastically governed and little-understood universe.
  `,
  siteUrl: 'https://ifiht.github.io/',
  disqusSiteUrl: 'https://abcdef/',
  // Prefixes all links. For cases when deployed to evlis.org/ifiht-blog/
  pathPrefix: '/ifiht-blog', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-interstellar.png', // file in content/images
  googleAnalyticsId: 'UA-67868977-2',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/ivy-icon.png',
  postsPerPage: 6,
  disqusShortname: 'abcdef',
  headerTitle: 'ifiht-blog',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Ifiht',
        },
        {
          label: 'Website',
          url: 'https://ifiht.github.io/',
        },
        /*{
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },*/
      ],
    },
  ],
}
