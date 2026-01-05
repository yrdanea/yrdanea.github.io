// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yrdanea',
  tagline: 'Ein Weltenbau-Projekt',
  favicon: 'img/favicon.ico',

  url: 'https://yrdanea.github.io',
  baseUrl: '/kompendium/',

  organizationName: 'yrdanea',
  projectName: 'kompendium',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Die neue, saubere Markdown-Struktur für v3.9
  markdown: {
    format: 'mdx',
    mermaid: true, // Falls du Diagramme nutzt
    anchors: {
      maintainCase: true,
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
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
      // KORRIGIERT: colorMode direkt in themeConfig (nicht doppelt verschachtelt)
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
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
          { label: 'Kontakt', href: '/contact' },
          { label: 'About', href: '/about' },
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