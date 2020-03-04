<template>
  <div>
    <counter />
    <language />

    <impression
      class="header"
      position="left"
      background="https://morino.party/assets/background_ap_2.webp"
    >
      <h2>
        {{ $t("impression.header.h2[0]") }}
        <br />
        {{ $t("impression.header.h2[1]") }}
      </h2>
      <logo />
      <p>{{ $t("impression.header.p[0]") }}</p>
    </impression>
    <impression
      position="right"
      background="/index/impression_1.png"
      :comment="$t('impression.1.comment[0]')"
    >
      <h2>
        {{ $t("impression.1.h2[0]") }}
      </h2>
      <p>
        {{ $t("impression.1.p[0]") }}
      </p>
    </impression>
    <impression
      position="left"
      background="/index/impression_2.png"
      :comment="$t('impression.2.comment[0]')"
    >
      <h2>
        {{ $t("impression.2.h2[0]") }}
      </h2>
      <p>
        {{ $t("impression.2.p[0]") }}
        <br />
        {{ $t("impression.2.p[1]") }}
      </p>
    </impression>
    <impression position="right" background="/index/impression_3.png">
      <h2>
        {{ $t("impression.3.h2[0]") }}
      </h2>
      <p>
        {{ $t("impression.3.p[0]") }}<br />
        {{ $t("impression.3.p[1]") }}
      </p>
    </impression>

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
            <label>{{ $t("modal.close[0]") }}</label>
            <close />
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
    "impression": {
      "header" : {
        "h2": ["共同生活を始めよう。", "もりの中で。"],
        "p": [
          "もりのパーティは、マインクラフトサーバーを中心としたコミュニティです。"
        ]
      },
      "1" : {
        "h2": ["走って、木を切って、あそびまわろう。"],
        "p": ["もりのパーティは、”だいたいバニラ”なマインクラフトをあそぶことができるマルチサーバーです。"],
        "comment": ["首都もりもとの様子"]
      },
      "2" : {
        "h2": ["いろんなことを起こそう。できないことをやろう。"],
        "p": ["一人ではできなかったことが、もりのパーティの住人と一緒にやればできるはず!","マルチプレイならではの楽しみ方を、全力で楽しみましょう！"],
        "comment": ["有志によって整備されたエンドポータル付近"]
      },
      "3" : {
        "h2": ["いろんな出会いがここに。"],
        "p": ["もりのパーティでは、いろんなな人達が共同生活しています。","ひとりひとり違う、様々な個性を持ったプレイヤーと、楽しい日々を一緒に過ごしましょう。"],
        "comment": ["有志によって整備されたエンドポータル付近"]
      }
    },
    "modal": {
      "close": ["とじる"]
    }
  },
  "en": {
    "impression": {
      "header": {
        "h2": ["Live together.", "In the forest."],
        "p": ["MorinoParty is a community centered on Minecraft Server."]
      },
      
      "1" : {
        "h2": ["走って、木を切って、あそびまわろう。"],
        "p": ["もりのパーティは、”だいたいバニラ”なマインクラフトをあそぶことができるマルチサーバーです。"],
        "comment": ["首都もりもとの様子"]
      },
      "2" : {
        "h2": ["いろんなことを起こそう。できないことをやろう。"],
        "p": ["一人ではできなかったことが、もりのパーティの住人と一緒にやればできるはず!","マルチプレイならではの楽しみ方を、全力で楽しみましょう！"],
        "comment": ["有志によって整備されたエンドポータル付近"]
      },
      "3" : {
        "h2": ["いろんな出会いがここに。"],
        "p": ["もりのパーティでは、いろんなな人達が共同生活しています。","ひとりひとり違う、様々な個性を持ったプレイヤーと、楽しい日々を一緒に過ごしましょう。"],
        "comment": ["有志によって整備されたエンドポータル付近"]
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
      right: 20px;
      display: flex;
      color: white;
      svg {
        width: 30px;
        height: 30px;
        fill: white !important;
      }
      label {
        padding-right: 10px;
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
import imglogo from "~/assets/svg/moripa-img-logo.svg";
import close from "~/assets/svg/times-solid.svg";

import counter from "~/components/playercount_circle.vue";
import language from "~/components/language_swicher.vue";
import impression from "~/components/section/impression.vue";
import navBottom from "~/components/nav_bottom.vue";

import axios from "axios";

export default {
  components: {
    logo,
    imglogo,
    close,
    counter,
    language,
    impression,
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
        window.history.pushState(null, null, "/");
      }, 500);
    }
  }
};
</script>
