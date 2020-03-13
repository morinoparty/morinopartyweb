<template>
  <div>
    <modal type="news" :post="blogPost" />
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
          content: "https://morino.party/news/" + this.$nuxt.$route.params.post
        },
        {
          property: "og:image",
          content: "https://morino.party/" + this.blogPost.image
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
      blogPost: await require(`~/assets/content/news/${params.news}.json`)
    };
  }
};
</script>