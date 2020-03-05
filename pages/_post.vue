<template>
  <div>
    <navBottom type="page" @openModal="openModal" />
    <modal type="page" :post="blogPost" style="margin-top: 39px;" />
  </div>
</template>

<script>
import navBottom from "~/components/nav_bottom.vue";
import modal from "~/components/modal/post.vue";
export default {
  components: { navBottom, modal },
  data() {
    return {
      blogPost: {}
    };
  },
  props: ["post"],
  async asyncData({ params, payload }) {
    return {
      blogPost: await require(`~/assets/content/blog/${params.post}.json`)
    };
  }
};
</script>