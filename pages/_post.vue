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
  head() {
    return {
      title: this.blogPost.title + " | もりのパーティ!",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blogPost.description
        },
        {
          property: "og:title",
          content: this.blogPost.title
        },
        {
          property: "og:description",
          content: this.blogPost.description
        },
        {
          property: "og:url",
          content: "https://morino.party/" + this.$nuxt.$route.params.post
        }
      ]
    };
  },
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