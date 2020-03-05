<template>
  <section id="modal" :class="{ page: type == 'page' }" @click.self="$emit('closeModal')">
    <div class="content">
      <div class="title">
        <div class="postdata">
          <div v-if="$i18n.locale == 'ja'">
            <h1>{{ post.title }}</h1>
            <p>{{ post.description }}</p>
          </div>
          <div v-else>
            <h1>{{ post.title_en }}</h1>
            <p>{{ post.description_en }}</p>
          </div>
        </div>
        <div class="close" @click="$emit('closeModal')">
          <label>{{ $t("modal.close[0]") }}</label>
          <close />
        </div>
      </div>
      <div class="body">
        <div v-if="$i18n.locale == 'ja'">
          <div class="container" v-html="$md.render(post.body)"></div>
        </div>
        <div v-else>
          <div class="container" v-html="$md.render(post.body_en)"></div>
          <div class="container translate_info">
            <p>
              <strong>Translated information may not be up to date.</strong>
              <br />The original text is written in Japanese(日本語).
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="background" @click="$emit('closeModal')"></div>
  </section>
</template>

<script>
import close from "~/assets/svg/times-solid.svg";
export default {
  components: {
    close
  },
  props: ["post", "type"]
};
</script>

<i18n>
{
"ja": {
    "modal": {
        "close": ["とじる"]
    }
},
"en": {
    "modal": {
        "close": ["Close"]
    }
}
}

</i18n>

<style lang="scss">
section#modal {
  &.modal {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 50px);
    overflow: hidden;
    overflow-y: scroll;
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 25px;
    opacity: 0;
    &.active {
      opacity: 1;
      .content {
        transform: translateY(0);
        opacity: 1;

        box-shadow: 1px 1px 100px rgba(0, 0, 0, 0.7);
      }
    }
    .title {
      backdrop-filter: blur(10px);
    }
  }
  &.page {
    opacity: 1;
    .content {
      transform: translateY(0);
      opacity: 1;
    }
    .title .close {
      display: none;
    }
  }
  .content {
    z-index: 3;
    transform: translateY(50vh) scale(0.8);
    opacity: 0;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .title {
    position: relative;
    z-index: 3;
    overflow: hidden;
    max-width: 100%;
    height: 40vh;
    background-color: rgba(0, 121, 7, 0.5);
    .postdata {
      z-index: 4;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
      max-width: 730px;
      color: white;
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      color: white;
      &:hover {
        cursor: pointer;
      }
      svg {
        width: 30px;
        height: 30px;
        fill: white !important;
      }
      label {
        padding-right: 10px;
        display: block;
        align-self: center;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .body {
    position: relative;
    z-index: 3;
    padding-top: 50px;
    padding-bottom: 200px;
    background-color: white;
    min-height: calc(100vh - 703px);
  }
  .container {
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 730px;
    &.translate_info {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding-top: 20px;
      margin-top: 50px;
    }

    img {
      height: auto;
      width: calc(100% + 30px);
      transform: translateX(-15px);
      margin-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    h1 {
      margin-top: 0px;
      margin-bottom: 50px;
      text-align: center;
    }
    h2 {
      background: white;
      display: inline-block;
      padding: 10px 15px;
      font-size: 1.5rem;
      transform: translateX(-15px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 50px;
    }
    a {
      word-wrap: break-word;
      letter-spacing: 0.05rem;
      transition-duration: 0.5s;
      &:hover {
        text-decoration: none;
      }
    }
    p {
      margin-bottom: 1rem;
      line-height: 2;
    }
    table {
      width: calc(100% + 30px);
      margin-left: -15px;
    }
    table thead th {
      text-align: left;
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }
    table td,
    table th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
  }
}
</style>