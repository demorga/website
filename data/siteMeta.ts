const siteConfig = {
  header: {
    navigation: [
      {
        menuItem: "Home",
        menuLink: "/",
      },
      {
        menuItem: "Projects",
        menuLink: "/products",
        subMenu: [
          { menuItem: "Spec", menuLink: "/products/spec" },
          { menuItem: "Server", menuLink: "/products/server" },
          { menuItem: "Client", menuLink: "/products/client" },
          { menuItem: "Cli", menuLink: "/products/cli" },
        ],
      },
      { menuItem: "Blog", menuLink: "/blog" },
      { menuItem: "About", menuLink: "/about" },
    ],
  },
  footer: {
    navigation: [
      {
        menuItem: "Products",
        subMenu: [
          { menuItem: "Spec", menuLink: "/products/spec" },
          { menuItem: "Server", menuLink: "/products/server" },
          { menuItem: "Client", menuLink: "/products/client" },
          { menuItem: "Cli", menuLink: "/products/cli" },
        ],
      },
      {
        menuItem: "About us",
        subMenu: [
          { menuItem: "About", menuLink: "/about" },
          { menuItem: "Blog", menuLink: "/blog" },
        ],
      },
      { menuItem: "Legal", subMenu: [] },
      {
        menuItem: "Contact",
        subMenu: [
          { menuItem: "Twitter", menuLink: "#" },
          { menuItem: "Discord", menuLink: "#" },
          { menuItem: "GitHub", menuLink: "#" },
        ],
      },
    ],
    impressum: {},
    copyright: "© 2022 Demorga",
  },
} as const;

export default siteConfig;
