export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    script: [{ src: "https://kit.fontawesome.com/cf7cf76089.js" }],
    title: "もりのパーティ! | まったりのんびりマイクラ生活!",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover"
      },
      {
        property: "og:title",
        content: "もりのパーティ!"
      },
      {
        hid: "description",
        name: "description",
        content:
          "まったりのんびりマイクラ生活! もりのパーティは、マインクラフトサーバーを中心としたコミュニティです。"
      },
      {
        property: "og:description",
        content:
          "まったりのんびりマイクラ生活! もりのパーティは、マインクラフトサーバーを中心としたコミュニティです。"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:site_name",
        content: "もりのパーティ!"
      },
      {
        property: "og:image",
        content: "https://morino.party/img/thumbnail.jpg"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "morinoparty"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/img/icon.png" }]
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
  plugins: ["~/plugins/day.js"],
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
    "fullpage-nuxt",
    "nuxt-svg-loader",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "nuxt-purgecss"
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
    extend(config, ctx) {},
    extractCSS: true
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://morino.party",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: ["/en/**", "/admin/**"],
    generate: false
  },
  generate: {
    routes: function() {
      const fs = require("fs");
      const path = require("path");
      const post = fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
      const post_en = fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/en/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
      const news = fs.readdirSync("./assets/content/news").map(file => {
        return {
          route: `/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/news/${file}`)
        };
      });
      return Promise.all([post, post_en, news]).then(values => {
        return [...values[0], ...values[1]];
      });
    }
  }
};
