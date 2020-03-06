<template>
  <section class="impression" :class="{ [`lang-${$i18n.locale}`]: true }">
    <div class="content" :class="{ [`${position}`]: true }">
      <div class="title">
        <div>
          <slot />
        </div>
      </div>
    </div>

    <div class="players" v-if="players">
      <img
        v-for="(player, index) in players"
        v-bind:key="index"
        :src="'https://minotar.net/avatar/'+player+'/100.png'"
        alt
      />
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
      @media (max-width: 767px) {
        height: 100vh !important;
      }
    }
  }
  .content {
    height: 100vh;
    width: 30%;
    &.right {
      margin-left: auto;
    }
    &.height_half {
      height: inherit;
      margin-top: auto;
      width: 100%;
      .title {
        background-color: #efc900;
        height: 50vh;
        margin-top: 50vh;
        text-align: center;
        color: white;
      }
      .box_info {
        display: inline-block;
        cursor: pointer;
        background: white;
        padding: 20px 30px;
        margin-top: 40px;
        color: #efc900;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 50px;
      }
      @media (max-width: 767px) {
        h2 {
          margin-bottom: 20px;
        }
        .box_info {
          margin-top: 20px;
        }
      }
    }
    &.joinus {
      height: 100vh;
      margin-top: auto;
      .title {
        background-color: #efc70080;
        backdrop-filter: blur(10px);
        text-align: center;
        color: white;
        p.status {
          font-size: 1rem;
          padding-left: 0;
          white-space: nowrap;
          span {
            font-size: 2rem;
            font-weight: bold;
            &.tag {
              color: #867000;
              background-color: #fff;
              padding: 0px 10px;
              border-radius: 20px;
              font-size: 1rem;
              margin-right: 10px;
            }
          }
        }
      }
    }

    @media (max-width: 1400px) {
      width: 50%;
      .title {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      .title {
        height: 50vh;
        padding-left: 15px;
        padding-right: 15px;
        width: calc(100% - 30px);
        h2 {
          font-size: 2rem;
          line-height: 1.4;
        }
        p {
          line-height: 1.7;
        }
      }
    }
  }
  .players {
    width: 40%;
    padding-right: 30%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    grid-template-rows: repeat(auto-fill, 50px);
    img {
      width: 100%;
      &:nth-of-type(5n - 1) {
        grid-row: span 2;
        grid-column: span 2;
      }
      &:nth-of-type(15n) {
        grid-row: span 3;
        grid-column: span 3;
      }
    }
    @media (max-width: 1400px) {
      width: 50%;
      padding-right: 0;
      .title {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    @media (max-width: 767px) {
      height: 50vh;
      width: 100%;
      top: inherit;
      bottom: 0;
      padding-right: 0;
      .title {
        height: 50vh;
        padding-left: 15px;
        padding-right: 15px;
        width: calc(100% - 30px);
        h2 {
          font-size: 2rem;
          line-height: 1.6;
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
      padding-left: 10px;
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
    @media (max-width: 767px) {
      bottom: 10px;
      &.left {
        right: 10px;
      }
      &.right {
        left: 10px;
      }
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
    background-color: black;
  }
}
</style>

<script>
export default {
  props: ["position", "background", "comment", "players"]
};
</script>
