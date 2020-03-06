<template>
  <section class="auction" v-if="auction.lenght != 0">
    <div v-for="(content, index) in auction" v-bind:key="index">
      <card v-if="index < 3" :auction="content" />
    </div>
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
