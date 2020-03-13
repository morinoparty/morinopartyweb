<template>
  <div>
    <component
      class="content"
      :class="type"
      :is="isInternalLink(href) ? 'nuxt-link' : 'a'"
      :to="isInternalLink(href) ? href : ''"
      :href="isInternalLink(href) ? '' : href"
    >
      <div class="image" :style="'background-image: url(' + background + ');'">
        <div class="background-color"></div>
        <div class="info">
          {{ subtitle }}
          <h2>{{ title }}</h2>
        </div>
        <label class="auction_label">{{ label_left }}</label>
        <label class="auction_nowprice">{{ label_right }}</label>
      </div>
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  props: [
    "href",
    "type",
    "background",
    "subtitle",
    "title",
    "label_left",
    "label_right",
    "description"
  ],
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path);
    }
  }
};
</script>

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
  &.auction {
    .image .background-color {
      background-color: rgba(0, 121, 7, 0.5);
    }
  }
  &.news {
    .image .background-color {
      background-color: rgba(0, 93, 121, 0.5);
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
