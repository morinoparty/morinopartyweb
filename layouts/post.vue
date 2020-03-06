<template>
  <div>
    <nuxt style="margin-top: 39px;" />
    <navBottom type="page" />
    <language />
  </div>
</template>

<script>
import navBottom from "@/components/nav_bottom.vue";
import language from "@/components/language_swicher.vue";
export default {
  components: {
    language,
    navBottom
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
</style>
