<template>
  <div>
    <nuxt />
    <language />
  </div>
</template>

<script>
import language from "~/components/language_swicher.vue";
export default {
  components: {
    language
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
</style>
