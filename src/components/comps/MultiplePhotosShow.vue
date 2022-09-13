<template>
  <div class="row" v-if="form.photos.length">
    <div class="col-1 gt-sm">
      <br />
      <p>
        <label class="float-right q-mt-sm q-mr-md">
          <!-- Photos -->
        </label>
      </p>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-11 col-lg-11 c-white q-px-md">
      <div class="q-py-md">
        <q-carousel
          v-model="slide"
          thumbnails
          infinite
          height="400px"
          class="bg-grey-1 shadow-2 rounded-borders"
          animated
        >
          <q-carousel-slide
            v-for="(item, key) in form.photos"
            :key="key"
            :name="key"
            :img-src="'https://cdn.efficientsourceads.com/' + item.file"
          >
            <div class="absolute-bottom custom-caption text-red">
              <div class="text-subtitle1">
                <q-icon
                  style="z-index:1000;font-size:50px;padding: 5px; cursor: pointer;"
                  @click="deleteMedia(item.id, key)"
                  name="delete"
                />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      slide: 0,
    };
  },
  methods: {
    async deleteMedia(id, index) {
      let data = {
        method: "delete",
        url: "media/" + id,
      };
      let res = await this.$store.dispatch("app/postApi", data);
      if (res.success) {
        this.form.photos.splice(index, 1);
        this.slide = 0;
      }
    },
  },
};
</script>
