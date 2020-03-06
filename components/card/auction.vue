<template>
  <div>
    <a class="content" :href="'https://support.morino.party/auctions/' + auction.id">
      <div class="image" :style="'background-image: url(' + auction.thumbnail + ');'">
        <div class="background-color"></div>
        <div class="info">
          {{ $dayjs(auction.time_limit).format("M月D日 HH:mmまで") }}
          <h2>{{ auction.title }}</h2>
        </div>
        <label class="auction_label">開催中のオークション情報</label>
      </div>
      <div class="description">
        <p>{{ auction.description.slice(0,30) }}</p>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
a.content {
  display: block;
  height: calc(50vh - 40px);
  border: 2px solid rgb(214, 214, 214);
  background-color: white;
  text-decoration: none;
  color: black;
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
    label.auction_label {
      position: absolute;
      display: inline-block;
      padding: 10px;
      background-color: white;
      font-weight: bold;
    }
  }
  p {
    padding: 20px;
    line-height: 1.8;
  }
}
</style>

<script>
export default {
  props: ["auction"]
};
</script>
