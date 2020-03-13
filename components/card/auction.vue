<template>
  <div>
    <card
      :href="'https://support.morino.party/auctions/' + auction.id"
      :type="type"
      :background="auction.thumbnail"
      :subtitle="$dayjs(auction.time_limit).format($t('time_limit'))"
      :title="auction.title"
      :label_left="$t('auction')"
      :label_right="highest + $t('unit')"
      :description="auction.description.slice(0, 30) + '...'"
    />
  </div>
</template>
<i18n>
{
  "ja" : {
    "time_limit" : "M月D日 HH:mmまで",
    "auction": "開催中の土地オークション",
    "unit": "円"
  },
  "en" : {
    "time_limit" : "Up to MMMM D, HH:mm",
    "auction": "Land auction has been ranched",
    "unit": " Yen"
  }
}
</i18n>

<script>
import card from "~/components/card/normal.vue";

import axios from "axios";
export default {
  props: ["auction", "type"],
  components: {
    card
  },
  data() {
    return {
      highest: ""
    };
  },
  methods: {
    fetchcontent() {
      axios
        .get(`https://api.morino.party/auctions/highest/${this.auction.id}`)
        .then(res => {
          if (res.data) {
            this.highest = res.data[0].amount;
          } else {
            this.highest = 0;
          }
        })
        .catch(error => {
          this.highest = 0;
        });
    }
  },
  mounted() {
    this.fetchcontent();
  }
};
</script>
