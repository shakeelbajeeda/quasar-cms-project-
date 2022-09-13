<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      :name="1"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
    />
    <q-carousel-slide
      :name="2"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    />
    <q-carousel-slide
      :name="3"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    />
    <q-carousel-slide
      :name="4"
      img-src="https://cdn.quasar.dev/img/quasar.jpg"
    />
  </q-carousel>
   <div
      :class="
        $q.screen.lt.sm ? 'q-mx-md' : 'custom-search-row custom-search-border'
      "
      class="row customf-search-lg flex flex-center"
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
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
