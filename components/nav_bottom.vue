<template>
  <nav id="nav_bottom">
    <div class="list">
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
    "first": "Newbie!",
    "command": "Commands",
    "protect": "How to Protect",
    "createshop": "Balance",
    "fishing": "Fishing",
    "donate": "Donate",
    "vote": "Vote Bonous",
    "team": "Moderators",
    "wiki": "Wiki",
    "discord": "Discord"
  }
}
</i18n>
<script>
export default {
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
          path: "https://support.morino.party/team",
          icon: "fas fa-ambulance"
        },
        {
          slug: "wiki",
          path: "https://wiki.morino.party/",
          icon: "fas fa-book"
        },
        {
          slug: "discord",
          path: "https://discordapp.com",
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
  position: fixed;
  bottom: 25px;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: solid 2px #007907;
  backdrop-filter: blur(20px);
  padding: 10px 25px;
  border-radius: 50px;
  .list {
    display: flex;
  }
  .content {
    white-space: nowrap;
    display: inline-block;
    min-width: 50px;
    height: 50px;
    text-align: center;
    color: #007907;
    margin-right: 20px;
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
      font-size: 1.8rem;
    }
    label {
      padding-top: 4px;
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
</style>
