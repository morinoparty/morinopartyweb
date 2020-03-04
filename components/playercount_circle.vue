<template>
  <div class="counter" v-if="loading">
    <h3>
      <span>{{info}}</span>
      <br />人
    </h3>
    <p>プレイ中!</p>
  </div>
</template>

<style lang="scss">
.counter {
  z-index: 0;
  text-align: right;
  position: fixed;
  top: 15px;
  right: 15px;
  h3 {
    margin: 0;
    color: white;
    width: 100px;
    height: 100px;
    background-color: #efc900;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: rotate(15deg);
    font-weight: bold;
    span {
      font-size: 40px;
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
        this.loading = true;
        this.info = v.data.players.online;
      });
  }
};
</script>