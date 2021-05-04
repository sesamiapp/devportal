/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sesami developers',
  tagline: 'Built for developers, by developers',
  url: 'https://sesamiapp.github.io/devportal/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sesamiapp',
  projectName: 'devportal',
  themeConfig: {
    navbar: {
      title: 'Sesami developers',
      logo: {
        alt: 'Sesami',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
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
              label: 'Storefront',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sesami',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sesamiapp',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sesamiapp/docs',
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
};
