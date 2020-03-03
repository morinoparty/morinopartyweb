<template>
  <div id="wrapper">
    <section id="header">
      <div class="title">
        <h2>
          {{ $t("header.title.h2[0]") }}<br />{{ $t("header.title.h2[1]") }}
        </h2>
        <logo />
        <p>
          {{ $t("header.title.p[0]") }}
        </p>
      </div>
    </section>
    <section id="body"></section>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900");
* {
  font-family: Noto Sans JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
}
#wrapper {
  background-image: url("https://morino.party/assets/background_ap_2.webp");
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 100vh;
}
section#header {
  height: 100vh;
  background-color: rgba(0, 70, 3, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    h2 {
      font-size: 2.4rem;
      line-height: 2;
      font-feature-settings: "palt" 1;
      letter-spacing: 0.05em;
      margin-bottom: 25px;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 20px;
    }
    svg {
      margin-bottom: 40px;
      height: 4rem;
      // filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 5px 10px);
    }
    p {
      font-weight: bold;
      // text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 10px;
    }
  }
}
section#body {
  height: 100vh;
}
</style>

<script>
import logo from "~/assets/svg/moripalogo.svg";
export default {
  components: {
    logo
  }
};
</script>
