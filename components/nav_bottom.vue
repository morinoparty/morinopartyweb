<template>
  <nav id="nav_bottom">
    <div class="content" v-for="(content, index) in nav" v-bind:key="index">
      <i :class="'fas fa-' + content.icon" @click="openModal(content.slug)"></i>
      <label>
        {{ content.title }}
      </label>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { title: "はじめて!", slug: "first", icon: "user-tag" },
        { title: "コマンド", slug: "command", icon: "magic" },
        { title: "保護のかけ方", slug: "protect", icon: "shield-alt" },
        { title: "お金関連", slug: "createshop", icon: "yen-sign" },
        { title: "釣り大会", slug: "fishing", icon: "fish" },
        { title: "投票ボーナス", slug: "vote", icon: "vote-yea" },
        { title: "寄付", slug: "donate", icon: "piggy-bank" }
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
  transform: translateX(-50%);
  background-color: rgba(43, 139, 48, 0.5);
  border: solid 2px white;
  backdrop-filter: blur(10px);
  padding: 10px 25px;
  border-radius: 50px;
  .content {
    display: inline-block;
    min-width: 50px;
    height: 50px;
    text-align: center;
    color: white;
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
  }
}
</style>
