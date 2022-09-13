<template>
  <q-select
    filled
    v-model="location"
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    :options="options"
    @filter="setModel"
    label="Search Location"
    @update:model-value="setPlace"
    class="full-width q-mt-md"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { ref } from "vue";
import { debounce } from "quasar";
export default {
  props: {},
  data() {
    return {
      location: "",
      selected_location: {},
      options: ref([]),
    };
  },
  computed: {
    google() {
      return window.google;
    },
  },
  created() {
    this.setModel = debounce(this.setModel, 500);
  },
  methods: {
    setPlace(data) {
      this.$gmapApiPromiseLazy().then(async () => {
        let service = new google.maps.Geocoder();
        let response = await service.geocode({
          placeId: data.value,
          region: "us",
        });

        let formatted_address = response.results[0].formatted_address;
        let address_components = response.results[0].address_components;
        let geoDataFormated = {};
        geoDataFormated['address']=formatted_address;
        address_components.map((row, key) => {
          row.types.map((type) => {
            if (type == "route") {
              geoDataFormated["street"] = row.long_name;
            }
            if (type == "administrative_area_level_1") {
              geoDataFormated["state"] = row.short_name;
            }
            if (type == "administrative_area_level_2") {
              geoDataFormated["county"] = row.long_name;
            }
            if (type == "postal_code") {
              geoDataFormated["zip"] = row.long_name;
            }
            if (type == "locality") {
              geoDataFormated["city"] = row.long_name;
            }
             if (type == "country") {
              geoDataFormated["unit"] = row.short_name;
            }
          });
        });
        geoDataFormated['lat']=response.results[0].geometry.location.lat()
        geoDataFormated['lng']=response.results[0].geometry.location.lng()
        this.$emit(
          "update-location",
            geoDataFormated
        );
      });
    },
    async setModel(data, update, abort) {
      if (data == "") {
        abort();
        return;
      }
      update(async () => {
        let test = await this.$gmapApiPromiseLazy().then(async () => {
          let service = new google.maps.places.AutocompleteService();
          let result = await service.getPlacePredictions({
            input: data,
            componentRestrictions: { country: "us" },
          });
          let options = [];
          result.predictions.forEach((item) => {
            options.push({ label: item.description, value: item.place_id });
          });
          this.options = ref(options);
          return Promise.resolve(this.options);
        });
      });
    },
  },
};
</script>
