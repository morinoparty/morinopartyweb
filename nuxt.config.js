export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/day.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected"
        }
      }
    ],
    "nuxt-svg-loader",
    "@nuxtjs/markdownit"
  ],

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    vueI18n: {
      fallbackLocale: "ja",
      messages: {}
    }
  },
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes: function() {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
    }
  }
};
