<template>
  <section class="impression" :class="{ [`lang-${$i18n.locale}`]: true }">
    <div class="content" :class="{ [`${position}`]: true }">
      <div class="title">
        <div>
          <slot />
        </div>
      </div>
      <div class="space"></div>
    </div>
    <div class="comment" :class="{ [`${position}`]: true }" v-if="comment">{{ comment }}</div>
    <div class="background" :style="'background-image: url(' + background + ');'"></div>
  </section>
</template>

<style lang="scss">
section.impression {
  position: relative;
  overflow: hidden;
  &.lang-en {
    .title h2 {
      font-feature-settings: "palt" 1;
      letter-spacing: 0em;
    }
  }
  &.header {
    .title {
      color: white;
      background-color: rgba(0, 70, 3, 0.5);
    }
  }
  .content {
    height: 100vh;
    width: 30%;
    &.right {
      margin-left: auto;
    }
    &.height_half {
      height: 50vh;
      margin-top: auto;
      width: 100%;
      .title {
        background-color: rgb(239, 201, 0);
        height: 50vh;
        text-align: center;
        color: white;
      }
      .box_info {
        cursor: pointer;
        background: white;
        padding: 20px;
        margin-top: 40px;
        color: #efc900;
        h3 {
          font-size: 1.8rem;
        }
      }
    }
  }
  .title {
    height: 100vh;
    padding-left: 50px;
    padding-right: 50px;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 2.4rem;
      line-height: 2;
      font-feature-settings: "palt" 1;
      letter-spacing: 0.05em;
      margin-top: 0px;
      margin-bottom: 25px;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 20px;
    }
    svg {
      margin-bottom: 40px;
      height: 4rem;
      max-width: 100%;
      // filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 5px 10px);
    }
    p {
      margin-bottom: 0px;
      line-height: 2;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 10px;
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 300px;
      height: 300px;
      #moripa-img-logo_svg__レイヤー_3 {
        display: none;
      }
    }
  }
  .comment {
    position: absolute;
    bottom: 30px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    &.left {
      right: 30px;
    }
    &.right {
      left: 30px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>

<script>
export default {
  props: ["position", "background", "comment"]
};
</script>
