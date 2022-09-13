<template>
  <div class="col-md-4 col-sm-4 col-xs-12">
    <q-card class="text-center q-mt-md" :class="$q.screen.gt.sm ? 'zoom' : ''">
      <div class="q-py-md" :class="card_data.card_header_bg">
        <q-chip size="18px" outline color="grey-3">{{
          card_data.card_header_chip
        }}</q-chip>
      </div>
      <q-card-section>
        <div>
          <span class="doller-sign text-bold">$</span
          ><span class="text-h2 q-ml-md">{{ card_data.amount }}</span>
          <p class="text-caption">Per month</p>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>{{ card_data.caption_1 }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>{{ card_data.caption_2 }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>{{ card_data.caption_3 }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>{{ card_data.caption_4 }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-btn
          class="q-mt-md q-pa-md text-caption"
          :label="card_data.Footer_btnLabel"
          :color="card_data.footerbtn_color"
          rounded
        />
      </q-card-section>
      <q-card-section>
        <q-icon color="green" size="2rem" :name="card_data.icon"> </q-icon>
        <div class="text-caption">{{ card_data.icon_label }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: ["card_data"],
};
</script>
<style scoped>
.doller-sign {
  position: absolute;
  top: 21px;
}
.zoom:hover {
  z-index: 1;
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
</style>
