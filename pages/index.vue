<template>
  <div>
    <counter />
    <impression class="header page-1" position="left" background="/index/header.jpg">
      <h2 v-html="$t('impression.header.h2')"></h2>
      <logo />
      <p v-html="$t('impression.header.p')"></p>
    </impression>

    <impression
      v-for="(content, index) in $t('impression.content')"
      v-bind:key="index"
      :class="'page-' + index"
      :position="content.position"
      :background="content.background"
      :comment="content.comment"
    >
      <h2 v-html="content.h2"></h2>
      <p v-html="content.p"></p>
    </impression>

    <impression position="height_half" background="/index/joinus_3.png">
      <h2 v-html="$t('impression.beginner.h2')"></h2>
      <p v-html="$t('impression.beginner.p')"></p>
      <a @click="openModal('first')" class="box_info" v-html="$t('impression.beginner.button')"></a>
    </impression>

    <auction />

    <joinus />

    <!-- モーダル動作 -->
    <modal
      v-if="showModal"
      :class="[{ modal: true }, { active: showModal_animation_open }]"
      :post="post"
      type="modal"
      @click.self="closeModal()"
      @closeModal="closeModal"
    />
    <style v-if="showModal">
  html {
    overflow: hidden;
  }
    </style>

    <!-- ナビバー -->
    <navBottom v-show="$window.width > 767" type="top" @openModal="openModal" />
    <navBottom
      v-show="$window.width < 767"
      class="bottom"
      type="top_small"
      @openModal="openModal"
      @closeModal="closeModal"
    />
  </div>
</template>

<i18n lang="json">
{
  "ja": {
    "impression": {
      "header" : {
        "h2": "共同生活を始めよう。<br>もりの中で。",
        "p": 
          "もりのパーティは、マインクラフトサーバーを中心としたコミュニティです。"
      },
      "content" : [
        {
          "position":"right",
          "background":"/index/impression_1.png",
          "h2": "走って、木を切って、あそびまわろう。",
          "p": "もりのパーティは、“だいたいバニラ”で“だいたい最新”のマインクラフトをあそぶことができるマルチプレイサーバーです。",
          "comment": "首都もりもとの様子"
        },{
          "position":"left",
          "background":"/index/impression_2.png",
          "h2": "いろんなことを起こそう。できないことをやろう。",
          "p": "一人ではできなかったことが、もりのパーティの住人と一緒にやればできるはず!<br>マルチプレイならではの楽しみ方を、全力で楽しみましょう！",
          "comment": "有志によって整備されたエンドポータル付近"
        },{
          "position":"right",
          "background":"/index/impression_3.png",
          "h2": "いろんな出会いがここに。",
          "p": "もりのパーティでは、いろんなな人達が共同生活しています。<br>ひとりひとり違う、様々な個性を持ったプレイヤーと、楽しい日々を一緒に過ごしましょう。"
        }
      ],
      "beginner" : {
        "h2": "さあ、始めましょう。",
        "p": "まずは、はじめての方向けのページをチェックしましょう!<br>参加するときに必要な情報について説明しています！ 絶対確認しましょう!",
        "button": "はじめての方へ!"
      }
    }
  },
  "en": {
    "impression": {
      "header": {
        "h2": "Let's have fun,<br>together in the forest.",
        "p": "MorinoParty is a community based on a Minecraft Server"
      },
      "content" : [
        {
          "position":"right",
          "background":"/index/impression_1.png",
          "h2": "Let's have fun in the Morino Party server!",
          "p": "Morino Party (Moripa) is a server based on Vanilla Minecraft and it has minimal plugins. You can join using the newest version of Minecraft.",
          "comment": "Morimoto city in Moripa"
        },{
          "position":"left",
          "background":"/index/impression_2.png",
          "h2": "Just do it, whatever you want to do. What are you waiting for??",
          "p": "In Moripa, you can create what you cannot in a singleplayer world. Create huge survival bases, futuristic cities, and even more epic buildings. In Moripa, we can achieve our dreams together!",
          "comment": "Epic portals created by players in the server"
        },{
          "position":"right",
          "background":"/index/impression_3.png",
          "h2": "Your participation is the first step to creating new connections!!",
          "p": "In Moripa, there are a lot of people with unique personalities and traits. Miner, Builder, Shop Manager, and many more. Let’s have fun on this server. Express yourself, and have fun on the server."
        }
      ],
      "beginner" : {
        "h2": "Let's get started!",
        "p": "In the beginning, go check the “Beginner!” page to get basic information and knowledge to join our server! You MUST get through it!!",
        "button": "Beginner!"
      }
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

  margin: 0;
}
</style>

<script>
import logo from "~/assets/svg/moripalogo.svg";
import imglogo from "~/assets/svg/moripa-img-logo.svg";

import counter from "~/components/playercount_circle.vue";
import language from "~/components/language_swicher.vue";

import impression from "~/components/section/impression.vue";
import auction from "~/components/section/auction.vue";
import joinus from "~/components/section/joinus.vue";

import modal from "~/components/modal/post.vue";

import navBottom from "~/components/nav_bottom.vue";

import axios from "axios";

export default {
  components: {
    logo,
    imglogo,
    counter,
    language,
    impression,
    auction,
    joinus,
    modal,
    navBottom
  },
  data() {
    return {
      // モーダル表示用
      showModal: false,
      showModal_animation_open: false,
      // モーダル投稿内容用
      post: {}
    };
  },
  head() {
    return {
      script: [
        // Netlify CMS
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  methods: {
    // モーダルオープン
    async openModal(slug) {
      window.history.pushState(null, null, "/" + slug);
      this.post = await require(`~/assets/content/blog/${slug}.json`);
      this.showModal = true;
      window.setTimeout(v => {
        this.showModal_animation_open = true;
      }, 1);
    },
    // モーダルクローズ
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
