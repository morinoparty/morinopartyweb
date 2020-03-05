<template>
  <section class="auction">
    <article
      class="content"
      v-for="(content, index) in content"
      v-bind:key="index"
    >
      <h2>{{ content.title }}</h2>
    </article>
  </section>
</template>

<style lang="scss">
section.auction {
  display: grid;
  article {
    height: 100vh;
  }
}
</style>

<script>
import card from "~/components/card/normal.vue";
import axios from "axios";
export default {
  components: { card },
  data() {
    return {
      content: {},
      coming: {},
      loading: true
    };
  },
  methods: {
    fetchcontent() {
      axios.get(`https://api.morino.party/auctions`).then(res => {
        this.content = res.data;
        this.loading = false;
        console.log(res.data);
      });
    }
  },
  mounted() {
    this.fetchcontent();
  }
};
</script>
