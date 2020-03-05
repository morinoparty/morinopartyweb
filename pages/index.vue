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
      <h2>{{ $t("impression.1.h2[0]") }}</h2>
      <p>{{ $t("impression.1.p[0]") }}</p>
    </impression>
    <impression
      position="left"
      background="/index/impression_2.png"
      :comment="$t('impression.2.comment[0]')"
    >
      <h2>{{ $t("impression.2.h2[0]") }}</h2>
      <p>
        {{ $t("impression.2.p[0]") }}
        <br />
        {{ $t("impression.2.p[1]") }}
      </p>
    </impression>
    <impression position="right" background="/index/impression_3.png">
      <h2>{{ $t("impression.3.h2[0]") }}</h2>
      <p>
        {{ $t("impression.3.p[0]") }}
        <br />
        {{ $t("impression.3.p[1]") }}
      </p>
    </impression>

    <modal
      v-if="showModal"
      v-bind:class="[{ active: showModal_animation_open }]"
      :post="post"
      @click.self="closeModal()"
      @closeModal="closeModal"
    />

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
        "p": ["もりのパーティは、“だいたいバニラ”で“だいたい最新”のマインクラフトをあそぶことができるマルチプレイサーバーです。"],
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
    }
  },
  "en": {
    "impression": {
      "header": {
        "h2": ["Live together,", "In the forest."],
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
</style>

<script>
import logo from "~/assets/svg/moripalogo.svg";
import imglogo from "~/assets/svg/moripa-img-logo.svg";

import counter from "~/components/playercount_circle.vue";
import language from "~/components/language_swicher.vue";
import impression from "~/components/section/impression.vue";
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
