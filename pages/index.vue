<template>
  <div id="wrapper">
    <counter />
    <section id="header">
      <div class="title">
        <h2>
          {{ $t("header.title.h2[0]") }}
          <br />
          {{ $t("header.title.h2[1]") }}
        </h2>
        <logo />
        <p>{{ $t("header.title.p[0]") }}</p>
      </div>
    </section>
    <section
      id="modal"
      v-if="showModal"
      v-bind:class="[{ active: showModal_animation_open }]"
      @click.self="closeModal()"
    >
      <div class="modal">
        <div class="title">
          <div class="postdata">
            <div v-if="$i18n.locale == 'ja'">
              <h1>{{ post.title }}</h1>
              <p>{{ post.description }}</p>
            </div>
            <div v-else>
              <h1>{{ post.title_en }}</h1>
              <p>{{ post.description_en }}</p>
            </div>
          </div>
          <div class="close" @click="closeModal()">
            <close />
            <label>{{ $t("modal.close[0]") }}</label>
          </div>
        </div>
        <div class="body">
          <div
            class="container"
            v-html="$md.render(post.body)"
            v-if="$i18n.locale == 'ja'"
          ></div>
          <div class="container" v-html="$md.render(post.body_en)" v-else></div>
        </div>
      </div>
      <div class="background" @click="closeModal()"></div>
    </section>
    <navBottom @openModal="openModal" />
  </div>
</template>
<i18n>
{
  "ja": {
    "header": {
      "title": {
        "h2": ["共同生活を始めよう。", "もりの中で。"],
        "p": [
          "もりのパーティ!は、マインクラフトサーバーを中心としたコミュニティです。"
        ]
      }
    },
    "modal": {
      "close": ["とじる"]
    }
  },
  "en": {
    "header": {
      "title": {
        "h2": ["Let's start living together.", "In the forest."],
        "p": ["MorinoParty is a community centered on Minecraft Server."]
      }
    },
    "modal": {
      "close": ["Close"]
    }
  }
}
</i18n>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900");
* {
  font-family: Noto Sans JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
}
#wrapper {
  background-image: url("https://morino.party/assets/background_ap_2.webp");
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 100vh;
}
section#header {
  height: 100vh;
  background-color: rgba(0, 70, 3, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    h2 {
      font-size: 2.4rem;
      line-height: 2;
      font-feature-settings: "palt" 1;
      letter-spacing: 0.05em;
      margin-bottom: 25px;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 20px;
    }
    svg {
      margin-bottom: 40px;
      height: 4rem;
      // filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 5px 10px);
    }
    p {
      font-weight: bold;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 10px;
    }
  }
}
section#modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: scroll;
  z-index: 1;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  padding: 25px;
  &.active {
    opacity: 1;
    .modal {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .modal {
    z-index: 2;
    transform: translateY(50vh) scale(0.8);
    opacity: 0;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .title {
    position: relative;
    z-index: 2;
    overflow: hidden;
    max-width: 100%;
    height: 40vh;
    background-color: rgba(0, 121, 7, 0.5);
    backdrop-filter: blur(10px);
    .postdata {
      z-index: 3;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
      max-width: 730px;
      color: white;
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .close {
      position: absolute;
      top: 20px;
      left: 20px;
      display: flex;
      color: white;
      svg {
        width: 30px;
        height: 30px;
        fill: white !important;
      }
      label {
        padding-left: 10px;
        display: block;
        align-self: center;
      }
    }
  }
  .body {
    position: relative;
    z-index: 2;
    padding-top: 50px;
    padding-bottom: 200px;
    background-color: white;
    min-height: calc(100vh - 300px);
  }
  .container {
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 730px;
    img {
      height: auto;
      width: calc(100% + 30px);
      transform: translateX(-15px);
      margin-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    h1 {
      margin-top: 0px;
      margin-bottom: 50px;
      text-align: center;
    }
    h2 {
      background: white;
      display: inline-block;
      padding: 10px 15px;
      font-size: 1.5rem;
      transform: translateX(-15px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 50px;
    }
    a {
      word-wrap: break-word;
      letter-spacing: 0.05rem;
      transition-duration: 0.5s;
      &:hover {
        text-decoration: none;
      }
    }
    p {
      margin-bottom: 1rem;
      line-height: 2;
    }
    table {
      width: calc(100% + 30px);
      margin-left: -15px;
    }
    table thead th {
      text-align: left;
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }
    table td,
    table th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
  }
}
</style>

<script>
import logo from "~/assets/svg/moripalogo.svg";
import close from "~/assets/svg/times-solid.svg";
import counter from "~/components/playercount_circle.vue";
import navBottom from "~/components/nav_bottom.vue";

import axios from "axios";

export default {
  components: {
    logo,
    close,
    counter,
    navBottom
  },
  data() {
    return {
      showModal: false,
      showModal_animation_open: false,
      showModal_animation_close: false,
      post: {}
    };
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  methods: {
    async openModal(slug) {
      window.history.pushState(null, null, "/" + slug);
      this.post = await require(`~/assets/content/blog/${slug}.json`);
      console.log(this.post);
      this.showModal = true;
      window.setTimeout(v => {
        this.showModal_animation_open = true;
      }, 1);
    },
    closeModal() {
      this.showModal_animation_open = false;
      window.setTimeout(v => {
        this.showModal = false;
        this.post = {};
        console.log(this.post);
        window.history.pushState(null, null, "/");
      }, 500);
    }
  }
};
</script>
