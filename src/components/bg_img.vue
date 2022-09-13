<template>
  <q-parallax :src="bg_img_data.img_src">
    <h3 class="q-mb-none" :class="bg_img_data.color">
      {{ bg_img_data.img_title }}
    </h3>
  </q-parallax>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["bg_img_data"],
  setup() {},
});
</script>
