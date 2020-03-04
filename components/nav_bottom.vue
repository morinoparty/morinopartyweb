<template>
  <nav id="nav_bottom">
    <div class="content" v-for="(content, index) in nav" v-bind:key="index">
      <div v-if="content.slug">
        <i :class="content.icon" @click="openModal(content.slug)"></i>
        <label>{{ content.title }}</label>
      </div>
      <a v-if="content.path" :href="content.path">
        <i :class="content.icon"></i>
        <label>{{ content.title }}</label>
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { title: "はじめて!", slug: "first", icon: "fas fa-user-tag" },
        { title: "コマンド", slug: "command", icon: "fas fa-magic" },
        { title: "保護のかけ方", slug: "protect", icon: "fas fa-shield-alt" },
        { title: "お金関連", slug: "createshop", icon: "fas fa-yen-sign" },
        { title: "釣り大会", slug: "fishing", icon: "fas fa-fish" },
        { title: "投票ボーナス", slug: "vote", icon: "fas fa-vote-yea" },
        { title: "寄付", slug: "donate", icon: "fas fa-piggy-bank" },
        {
          title: "Discord",
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
  bottom: 30px;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: solid 2px white;
  backdrop-filter: blur(20px);
  padding: 10px 25px;
  border-radius: 50px;
  .content {
    display: inline-block;
    min-width: 50px;
    height: 50px;
    text-align: center;
    color: #007907;

    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
    i {
      font-size: 1.8rem;
    }
    label {
      padding-top: 2px;
      font-size: 10px;
      font-weight: normal;
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
