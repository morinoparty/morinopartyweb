<template>
  <div>
    <card
      :href="'/news/' + data.slug"
      :type="type"
      :background="'aaa'"
      :subtitle="$dayjs(data.date).format('M/D HH:mm')"
      :title="data.title"
      :label_left="'NEWS'"
      :label_right="data.category"
      :description="data.description.slice(0, 30) + '...'"
    />
  </div>
</template>
<i18n>
{
  "ja" : {
    "time_limit" : "M月D日 HH:mmまで",
    "auction": "開催中の土地オークション",
    "unit": "円"
  },
  "en" : {
    "time_limit" : "Up to MMMM D, HH:mm",
    "auction": "Land auction has been ranched",
    "unit": " Yen"
  }
}
</i18n>

<script>
import card from "~/components/card/normal.vue";
export default {
  props: ["data", "type"],
  components: {
    card
  }
};
</script>
