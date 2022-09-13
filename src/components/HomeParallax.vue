<template>
  <q-parallax :src="parallax_data.img_src">
    <h3 class="q-mb-none text-center" :class="parallax_data.color">
      {{ parallax_data.img_title }}
    </h3>
    <p class="text-white">{{ parallax_data.caption }}</p>
    <div
      :class="
        $q.screen.lt.sm ? 'q-mx-md' : 'custom-search-row custom-search-border'
      "
      class="row"
      style="background: #e9e9e969"
    >
      <div
        class="custom-search-input-bg"
        :class="$q.screen.lt.sm ? 'col-xs-12' : 'custom-search-left-input'"
      >
        <q-input
          :class="$q.screen.lt.sm ? 'q-ma-sm ' : ''"
          borderless
          v-model="text"
          placeholder="What are you looking for?"
          :dense="dense"
        />
      </div>
      <q-separator vertical color="grey-4" />
      <div
        class="custom-search-input-bg"
        :class="$q.screen.lt.sm ? 'col-xs-12' : ''"
      >
        <q-input
          :class="$q.screen.lt.sm ? 'q-ma-sm ' : ''"
          class="bg-white"
          borderless
          v-model="text"
          placeholder="Location"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon
              name="las la-dot-circle"
              size="1rem"
              color="blue"
              class="q-mr-sm"
            />
          </template>
        </q-input>
      </div>
      <div :class="$q.screen.lt.sm ? 'q-ml-sm q-mb-sm' : 'custom-search-btn'">
        <q-btn
          label="submit"
          color="blue"
          class="q-py-md"
          :class="$q.screen.lt.sm ? 'custom-btn-width' : ''"
        ></q-btn>
      </div>
    </div>
  </q-parallax>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: ["parallax_data"],
  setup() {},
});
</script>

