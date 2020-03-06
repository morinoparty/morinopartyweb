<template>
  <section class="auction" v-if="auction.lenght !== 0">
    <card v-for="(content, index) in auction" v-bind:key="index" :auction="content" />
  </section>
</template>

<style lang="scss">
section.auction {
  background-color: #eeffef;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
}
</style>

<script>
import card from "~/components/card/auction.vue";
import axios from "axios";
import dayjs from "dayjs";
export default {
  components: { card },
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
        console.log(res.data);
      });
    }
  },
  mounted() {
    this.fetchcontent();
  }
};
</script>
