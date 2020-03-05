<template>
  <div id="locale-swicher">
    <div class="select">
      <globe />
      <select v-model="$i18n.locale">
        <option
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          :value="lang.code"
          aria-placeholder="Language"
        >{{ lang.title }}</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss">
#locale-swicher {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 99;
  .select {
    display: flex;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    justify-content: center;
    color: white;
    border: solid 2px #007907;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: #007907;
    margin-right: 10px;
  }
  select {
    height: 20px;
    background-color: rgba(0, 0, 0, 0);
    font-weight: bold;
    color: #007907;
    border: none;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

<script>
import globe from "~/assets/svg/globe-solid.svg";
export default {
  name: "locale-swicher",
  components: {
    globe
  },
  data() {
    return {
      langs: [
        { title: "日本語", code: "ja" },
        { title: "English", code: "en" }
      ]
    };
  }
};
</script>
