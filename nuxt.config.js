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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-i18n", "nuxt-svg-loader", "@nuxtjs/markdownit"],

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    vueI18n: {
      fallbackLocale: "ja",
      messages: {
        ja: {
          header: {
            title: {
              h2: ["共同生活を始めよう。", "もりの中で。"],
              p: [
                "もりのパーティ!は、マインクラフトサーバーを中心としたコミュニティです。"
              ]
            }
          }
        },
        en: {
          welcome: "Welcome"
        }
      }
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
  }
};
