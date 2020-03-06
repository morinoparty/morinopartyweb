<template>
  <div>
    <counter />
    <impression
      class="header"
      position="left"
      background="https://morino.party/assets/background_ap_2.webp"
    >
      <h2 v-html="$t('impression.header.h2')"></h2>
      <logo />
      <p v-html="$t('impression.header.p')"></p>
    </impression>

    <impression
      v-for="(content, index) in $t('impression.content')"
      v-bind:key="index"
      :position="content.position"
      :background="content.background"
      :comment="content.comment"
    >
      <h2 v-html="content.h2"></h2>
      <p v-html="content.p"></p>
    </impression>

    <impression
      position="height_full"
      background="https://media.discordapp.net/attachments/582015271208878090/683237959235141672/unknown.png"
    >
      <h2>さあ、始めましょう。</h2>
      <p>
        まずは、はじめての方向けのページをチェックしましょう!
        <br />ルールなどもこちらに記載されています！
      </p>
      <div @click="openModal('first')" class="box_info">
        <h3 style="margin: 0px;">はじめての方へ!</h3>
      </div>
    </impression>

    <auction />

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

    <navBottom type="top" @openModal="openModal" />
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
          "p": "もりのパーティでは、いろんなな人達が共同生活しています。<br>ひとりひとり違う、様々な個性を持ったプレイヤーと、楽しい日々を一緒に過ごしましょう。",
          "comment": "有志によって整備されたエンドポータル付近"
        }
      ]
    }
  },
  "en": {
    "impression": {
      "header": {
        "h2": "Live together,<br>In the forest.",
        "p": "MorinoParty is a community centered on Minecraft Server."
      },
      "content" : [
        {
          "position":"right",
          "background":"/index/impression_1.png",
          "h2": "Have fun in MORIPA!",
          "p": "Morino Party (Moripa) is the server base on Vanilla (almost without any mods), and joinable in the newest version of Minecraft.",
          "comment": "Morimoto city in Moripa"
        },{
          "position":"left",
          "background":"/index/impression_2.png",
          "h2": "So, what are you waiting for??",
          "p": "Let’s create what you cannot do in a single world, huge survival base, futuristic city, and more other epic buildings. You can achieve with players in Moripa.",
          "comment": "The epic portal created by admins"
        },{
          "position":"right",
          "background":"/index/impression_3.png",
          "h2": "Your participation will create the first step of new connections!!",
          "p": "In Moripa, there is a lot of people sharing their unique abilities to live in. MIner, Builder, Shop Manager, and more. Let’s have fun on this server. Express your ability, experience bran new atmosphere of the server."
        }
      ]
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
