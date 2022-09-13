<template>
  <q-select
    clearable
    type="select"
    class="q-mt-md"
    placeholder=""
    filled
    :label="$q.screen.lt.md ? 'Category' : ''"
    :options="categories"
    v-model="form.category"
    use-chips
    stack-label
    :rules="[(val) => val != null || 'Please Select Category']"
    @filter="search"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{
            $i18n.locale == "sp" ? scope.opt.sp_name : scope.opt.name
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:selected>
      <span
        v-if="form.category"
        dense
        square
        color="white"
        text-color="primary"
        class="q-my-none q-ml-xs q-mr-none"
      >
        {{ $i18n.locale == "sp" ? form.category.sp_name : form.category.name }}
      </span>
      <!-- <span v-else>None</span> -->
    </template>
  </q-select>
</template>

<script>
export default {
  props: ["form"],
  watch: {
    "form.category": async function (v) {
      this.form.category_id = v ? v.id : null;
    },
  },
  data() {
    return {
      categories: [],
      groupCat: [],
    };
  },
  async created() {
    // if (
    //   !this.$store.state.app.pageData ||
    //   !this.$store.state.app.pageData.allCat.data
    // ) {
    //   await this.$store.dispatch("app/fetchApi", {
    //     objName: "allCat",
    //     url: "categories?per_page=all",
    //   });
    // // }
    // let select = this.childCats(this.$store.state.app.pageData.allCat.data);
    // this.groupCat = select;
    // this.categories = select;
  },
  methods: {
    search(val, update) {
      update(() => {
        this.categories = this.filterCats(
          val,
          this.groupCat,
          this.$i18n.locale == "sp" ? "sp_name" : "name"
        );
      });
    },
    childCats(data) {
      let res = [];
      data.map((row) => {
        if (row.parent) {
          res.push(this.normelize(row));
        }
      });
      return res;
    },
  },
};
</script>
