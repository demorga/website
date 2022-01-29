// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Demorga",
  tagline: "A GitHub Organization Sandbox",
  url: "https://demorga.github.io/website",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "assets/favicon.ico",
  organizationName: "demorga", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  staticDirectories: ["public"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/demorga/website",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/demorga/website",
        },
        theme: {
          customCss: require.resolve("./src/styles/global.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      announcementBar: {
        id: "disclaimer",
        content: "This page is work in progress 🚧",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Demorga",
        logo: {
          alt: "Demorga Logo",
          src: "assets/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/demorga",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "#",
              },
              {
                label: "Twitter",
                href: "#",
              },
              {
                label: "Discord",
                href: "#",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "#",
              },
            ],
          },
        ],
        copyright: [
          `Copyright © ${new Date().getFullYear()} Demorga.`,
          `Built with <a target="_blank" rel="noopener noreferrer" href="https://docusaurus.io/">Docusaurus</a>.`,
          `Illustrations from <a target="_blank" rel="noopener noreferrer" href="https://undraw.co/illustrations">unDraw</a>.`,
        ].join(" "),
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
