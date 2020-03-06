<template>
  <div>
    <modal type="page" :post="blogPost" />
  </div>
</template>

<script>
import modal from "~/components/modal/post.vue";
export default {
  layout: "post",
  components: { modal },
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