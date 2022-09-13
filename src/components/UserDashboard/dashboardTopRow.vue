<template>
  <div class="row bg-color">
    <div class="col-md-6">
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5">{{
            row_data.row_heading
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="col-md-6">
      <q-item :to="row_data.link3" class="float-right text-caption">
        <q-item-section>{{ row_data.link3_label }}</q-item-section>
      </q-item>
      <q-item :to="row_data.link2" class="float-right text-caption">
        <q-item-section>{{ row_data.link2_label }}</q-item-section>
      </q-item>
      <q-item :to="row_data.link1" class="float-right text-caption">
        <q-item-section>{{ row_data.link1_label }}</q-item-section>
      </q-item>
    </div>
  </div>
</template>
<script>
export default {
  props: ["row_data"],
};
</script>
