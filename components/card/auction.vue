<template>
  <div>
    <a class="content" :href="'https://support.morino.party/auctions/' + auction.id">
      <div class="image" :style="'background-image: url(' + auction.thumbnail + ');'">
        <div class="background-color"></div>
        <div class="info">
          {{ $dayjs(auction.time_limit).format($t("time_limit")) }}
          <h2>{{ auction.title }}</h2>
        </div>
        <label class="auction_label">{{ $t("auction") }}</label>
        <label class="auction_nowprice">{{ highest }}{{ $t("unit") }}</label>
      </div>
      <div class="description">
        <p>{{ auction.description.slice(0, 30) }}...</p>
      </div>
    </a>
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
    "auction": "Land auction being held",
    "unit": " Yen"
  }
}
</i18n>

<style lang="scss">
a.content {
  display: block;
  height: calc(50vh - 40px) !important;
  border: 2px solid rgb(214, 214, 214);
  background-color: white;
  text-decoration: none;
  color: black;
  @media (max-width: 767px) {
    .image {
      .info {
        padding: 0 10px !important;
        h2 {
          font-size: 1.7rem !important;
        }
      }
      .auction_label,
      .auction_nowprice {
        font-size: 0.9rem;
      }
    }
    p {
      padding: 10px !important;
      font-size: 0.8rem !important;
    }
  }
  .image {
    position: relative;
    height: 80%;
    background-size: cover;
    background-position: center;
    .background-color {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 121, 7, 0.5);
    }
    .info {
      position: absolute;
      bottom: 20px;
      padding: 0 20px;
      color: white;
      h2 {
        font-size: 2rem;
      }
    }
    .auction_label,
    .auction_nowprice {
      position: absolute;
      display: inline-block;
      padding: 10px;
      background-color: white;
      font-weight: bold;
    }
    .auction_nowprice {
      right: 0;
    }
  }
  p {
    padding: 20px;
    line-height: 1.8;
  }
}
</style>

<script>
import axios from "axios";
export default {
  props: ["auction"],
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
          this.highest = res.data[0].amount;
        });
    }
  },
  mounted() {
    this.fetchcontent();
  }
};
</script>
