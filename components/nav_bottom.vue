<template>
  <nav id="nav_bottom">
    <div :class="type" v-if="type == 'top'">
      <div class="content" v-for="(content, index) in nav" v-bind:key="index">
        <a v-if="content.path" :href="content.path">
          <div class="icon">
            <i :class="content.icon"></i>
          </div>
          <i18n :path="content.slug" tag="label" />
        </a>
        <div v-else @click="openModal(content.slug)">
          <div class="icon">
            <i :class="content.icon"></i>
          </div>
          <i18n :path="content.slug" tag="label" />
        </div>
      </div>
    </div>
    <div :class="type" v-else-if="type == 'top_small'">
      <a class="logo" @click="$emit('closeModal')">
        <logo />
      </a>
      <div class="slider">
        <div v-for="(content, index) in nav" :key="index" class="content">
          <a v-if="content.path" :href="content.path">
            <i18n :path="content.slug" tag="label" />
          </a>
          <div v-else>
            <a v-if="$i18n.locale == 'ja'" @click="openModal(content.slug)">
              <i18n :path="content.slug" tag="label" />
            </a>
            <a v-else @click="openModal(content.slug)">
              <i18n :path="content.slug" tag="label" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div :class="type" v-else>
      <nuxt-link class="logo" v-if="$i18n.locale == 'ja'" :to="'/'">
        <logo />
      </nuxt-link>
      <nuxt-link class="logo" v-else :to="'/' + $i18n.locale + '/'">
        <logo />
      </nuxt-link>
      <div class="slider">
        <div v-for="(content, index) in nav" :key="index" class="content">
          <a v-if="content.path" :href="content.path">
            <i18n :path="content.slug" tag="label" />
          </a>
          <div v-else>
            <nuxt-link v-if="$i18n.locale == 'ja'" :to="'/' + content.slug">
              <i18n :path="content.slug" tag="label" />
            </nuxt-link>
            <nuxt-link v-else :to="'/' + $i18n.locale + '/' + content.slug">
              <i18n :path="content.slug" tag="label" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<i18n>
{
  "ja": {
    "first": "はじめて!",
    "command": "コマンド",
    "protect": "保護のかけ方",
    "createshop": "お金関連",
    "fishing": "釣り大会",
    "donate": "寄付",
    "vote": "投票ボーナス",
    "team": "運営チーム",
    "wiki": "Wiki",
    "discord": "Discord"
  },
  "en": {
    "first": "Beginner!",
    "command": "Commands",
    "protect": "Protections",
    "createshop": "Economics",
    "fishing": "Fishing",
    "donate": "Donation",
    "vote": "Votes/Bonuses",
    "team": "Administrators",
    "wiki": "Wiki",
    "discord": "Discord"
  }
}
</i18n>
<script>
import logo from "~/assets/svg/moripalogo.svg";
export default {
  props: ["type"],
  components: {
    logo
  },
  data() {
    return {
      nav: [
        { slug: "first", icon: "fas fa-user-tag" },
        { slug: "command", icon: "fas fa-magic" },
        { slug: "protect", icon: "fas fa-shield-alt" },
        { slug: "createshop", icon: "fas fa-yen-sign" },
        { slug: "fishing", icon: "fas fa-fish" },
        { slug: "vote", icon: "fas fa-vote-yea" },
        { slug: "donate", icon: "fas fa-piggy-bank" },
        {
          slug: "team",
          path: "https://www.notion.so/morinoparty2/4d4107d744dc4caf861fd703bf3d3175",
          icon: "fas fa-ambulance"
        },
        {
          slug: "wiki",
          path: "https://wiki.morino.party/",
          icon: "fas fa-book"
        },
        {
          slug: "discord",
          path: "https://discord.gg/9HdanPM",
          icon: "fab fa-discord"
        }
      ]
    };
  },
  methods: {
    openModal(slug) {
      this.$emit("openModal", slug);
    }
  }
};
</script>

<style lang="scss">
nav#nav_bottom {
  .top {
    position: fixed;
    bottom: 25px;
    left: 25px;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.7);
    border: solid 2px #007907;
    backdrop-filter: blur(20px);
    padding: 7px 20px;
    border-radius: 50px;
    display: flex;
    .content {
      white-space: nowrap;
      display: inline-block;
      min-width: 50px;
      height: 50px;
      text-align: center;
      color: #007907;
      margin-right: 10px;
      margin-right: 10px;
      border-right: 1px solid rgba(0, 121, 7, 0.5);
      padding-right: 10px;
      &:last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: none;
      }
      &:hover {
        cursor: pointer;
      }
      .icon {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
      i {
        font-size: 25px;
      }
      label {
        padding-top: 0px;
        font-size: 11px;
        font-weight: bold;
        display: block;
        text-align: center;
      }
      a,
      a:hover {
        text-decoration: none;
        color: #007907;
      }
    }
  }

  .page,
  .top_small {
    position: fixed;
    top: 0;
    display: flex !important;
    overflow-x: hidden;
    z-index: 5;
    width: 100%;
    background-color: rgba(0, 121, 7, 0.7);
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    height: 39px;
    a,
    a:hover {
      cursor: pointer;
      text-decoration: none;
      color: white;
      opacity: 0.8;
      font-size: 0.8rem;
      font-weight: bold;
      &.logo {
        opacity: 1;
      }
    }

    svg {
      vertical-align: middle;
      height: 19px;
      min-width: 147.77px;
      padding: 10px 0px;
      fill: #fff;
      overflow: hidden;
    }
    .content {
      display: inline-block;
      padding: 0 10px;
      white-space: nowrap;
      align-self: center;
    }
    .slider {
      display: flex;
      justify-content: flex-start;
      white-space: normal;
      position: relative;
      padding: 0;
      padding-left: 0px;
      padding-right: 0px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      .scroll {
        min-width: 150px;
        max-width: 150px;
        overflow-y: hidden;
        max-height: 250px;
      }
    }
  }
  .top_small {
    background-color: rgba(255, 255, 255, 0.7);
    border-top: solid 2px #007907;
    bottom: 0;
    top: inherit;
    height: calc(39px + env(safe-area-inset-bottom));
    display: none !important;

    @media (max-width: 767px) {
      display: flex !important;
    }
    a,
    a:hover {
      color: #007907;
    }
    .logo {
      display: none;
    }
    .slider {
      align-self: baseline;
    }
    .content {
      padding: 8px 10px;
    }
  }

  .top {
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
