<template>
  <div style="overflow: hidden; height: 100vh">
    <iframe class="mapFrame"
      title="Inline Frame Example"
      loading="lazy"
      :src="`https://${ $route.params.id }.map.morino.party`">
    </iframe>
    <nuxt-link to="/"><img class="mapIcon" src="/img/icon.png" alt=""></nuxt-link>
    <div class="mapBar">
      <nuxt-link
        :to="'/'"
        class="mapBar_link-top"
      >
        トップ
      </nuxt-link>
      <nuxt-link
        v-for="(content, index) in map"
        :key="index"
        :to="`/maps/${content.slug}`"
        class="mapBar_link"
      >
        {{ content.title }}
      </nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        lobby: {
          slug: 'lobby',
          title: 'ロビー'
        },
        main: {
          slug: 'main',
          title: '生活'
        }
      }
    }
  },
  head() {
    return {
      title: this.map[this.$nuxt.$route.params.id].title + "サーバーのリアルタイムマップ | もりのパーティ!",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "もりのパーティ"+this.map[this.$nuxt.$route.params.id].title　+　"サーバーのリアルタイムマップです"
        },
        {
          property: "og:title",
          content: this.map[this.$nuxt.$route.params.id].title + "サーバーのリアルタイムマップ"
        },
        {
          property: "og:description",
          content: "もりのパーティ"+this.map[this.$nuxt.$route.params.id].title + "サーバーのリアルタイムマップです"
        },
        {
          property: "og:url",
          content: "https://morino.party/maps/" + this.$nuxt.$route.params.id
        }
      ]
    };
  },
  created() {
    if(!this.map[this.$nuxt.$route.params.id]) {
      this.$router.push("/maps/lobby");
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.mapFrame {
  position: relative;
  border: none;
  width: 100%;
  height: 100vh;
}

.mapIcon {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 50px;
}

.mapBar {
  font-family: Noto Sans JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(20px);
  background-color: rgba(0, 121, 7, 0.7);
  border-radius: 8px;
  z-index: 1000;
  padding: 10px 15px;
  display: flex;
  &_link {
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: block;
    margin-right: 20px;    
    word-break: keep-all;
  }
  &_link-top {
    @extend .mapBar_link;
    opacity: 0.5;
  }
  &_link:last-of-type {
    margin-right: 0;
  }
}
</style>