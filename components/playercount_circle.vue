<template>
  <div class="counter" v-if="loading">
    <div class="num">
      <div>
        <span>{{ info }}</span>
        <br />
        <p>{{ $t("counter_circle.text[0]") }}</p>
      </div>
    </div>
    <p>{{ $t("counter_circle.text[1]") }}</p>
  </div>
</template>

<i18n>
{
  "ja": {
    "counter_circle": {
      "text": ["人", "プレイ中!"]
    }
  },
  "en": {
    "counter_circle": {
      "text": ["people", "Now Playing!"]
    }
  }
}
</i18n>
<style lang="scss">
.counter {
  z-index: 2;
  text-align: right;
  position: fixed;
  top: 15px;
  right: 15px;
  text-align: center;
  @media (max-width: 767px) {
    position: absolute;
  }
  .num {
    margin: 0;
    color: white;
    width: 100px;
    height: 100px;
    background-color: rgba(239, 201, 0, 0.7);
    backdrop-filter: blur(20px);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: rotate(15deg);
    font-weight: bold;
    margin-left: auto;
    span {
      display: inline-block;
      font-size: 40px;
    }
    p {
      margin: 0;
      font-size: 13px;
      margin-top: -10px;
      text-align: right;
      transform: translateX(-5px);
    }
  }
  p {
    font-weight: bold;
    text-align: center;
    width: 100%;
    color: white;
  }
  &.notconnect {
    h3 {
      background-color: rgba(255, 84, 34, 0.9);
    }
  }
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      loading: false
    };
  },
  async created() {
    const response = await axios
      .get("https://api.mcsrvstat.us/2/visit.morino.party")
      .then(v => {
        if (v.data.players) {
          this.loading = true;
          this.info = v.data.players.online;
        }
      });
  }
};
</script>
