// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yrdanea',
  tagline: 'Ein Weltenbau-Projekt',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yrdanea.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/yrdanea.github.io/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yrdanea', // Usually your GitHub org/user name.
  projectName: 'yrdanea.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      en: {
        htmlLang: 'de-DE',
      },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root 
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Yrdanea',
        logo: {
          alt: 'Yrdanea Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kompendiumSidebar',
            position: 'left',
            label: 'Kompendium',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Weltenbastler',
            href: 'https://community.weltenbastler.net',
          },
          {
            label: 'Kontakt',
            href: '/contact',
          },
          {
            label: 'About',
            href: '/about',
          },
        ],
       copyright: `Copyright © ${new Date().getFullYear()} Yrdanea`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
