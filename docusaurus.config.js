/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sesami Developers',
  tagline: 'Built for developers, by developers',
  url: 'https://sesami.co',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sesamiapp',
  projectName: 'devportal',
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'Sesami Developers',
      logo: {
        alt: 'Sesami',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro/',
          activeBaseRegex: '^/docs/intro/?$',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/sesami-experience/quick-start/',
          activeBasePath: '/docs/sesami-experience',
          position: 'left',
          label: 'Experience',
          className: 'navbar-shortcut',
        },
        {
          to: '/docs/sesami-sdk/quick-start/',
          activeBasePath: '/docs/sesami-sdk',
          position: 'left',
          label: 'SDK',
          className: 'navbar-shortcut',
        },
        {
          to: '/docs/sesami-api/intro/',
          activeBasePath: '/docs/sesami-api',
          position: 'left',
          label: 'API',
          className: 'navbar-shortcut',
        },
        {
          to: '/docs/sesami-flows/flows/',
          activeBasePath: '/docs/sesami-flows',
          position: 'left',
          label: 'Flows',
          className: 'navbar-shortcut',
        },
        {
          to: '/docs/sesami-apps/intro/',
          activeBasePath: '/docs/sesami-apps',
          position: 'left',
          label: 'Apps',
          className: 'navbar-shortcut',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sesamiapp/devportal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Experience',
              to: '/docs/sesami-experience/quick-start/',
            },
            {
              label: 'SDK',
              to: '/docs/sesami-sdk/quick-start/',
            },
            {
              label: 'API',
              to: '/docs/sesami-api/intro/',
            },
            {
              label: 'Flows',
              to: '/docs/sesami-flows/flows/',
            },
            {
              label: 'Apps',
              to: '/docs/sesami-apps/intro/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Community',
              href: 'http://community.sesami.co/',
            },
            {
              label: 'X',
              href: 'https://twitter.com/sesamiapp',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sesami',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/search/?q=sesami',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sesami website',
              href: 'https://sesami.co',
            },
            {
              label: 'Help Docs',
              href: 'https://help.sesami.co/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sesamiapp',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sesami, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sesamiapp/devportal/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sesamiapp/devportal/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src:
        'https://cdn.sesami.co/storefront/latest/sesami-main.js',
      async: false,
    },
  ],
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=optional',
      type: 'text/css',
    },
  ],
}
