<template>
  <section class="auction" v-if="auction.lenght != 0">
    <auction v-if="auction[0]" :auction="auction[0]" type="auction" />
    <news v-if="blogPosts[0]" :data="blogPosts[0]" type="news" />
  </section>
</template>

<style lang="scss">
section.auction {
  background-color: #ececec;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
  }
  padding: 20px;
}
</style>

<script>
import auction from "~/components/card/auction.vue";
import news from "~/components/card/news.vue";
import axios from "axios";
import dayjs from "dayjs";
export default {
  components: { auction, news },
  data() {
    return {
      auction: {},
      loading: true
    };
  },
  methods: {
    fetchcontent() {
      axios.get(`https://api.morino.party/auctions`).then(res => {
        this.auction = res.data;
        this.loading = false;
      });
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  mounted() {
    this.fetchcontent();
  }
};
</script>
