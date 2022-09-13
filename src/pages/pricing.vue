<template>
  <q-page>
    <div class="col-12 q-pt-xl">
      <div class="text-center">
        <div class="text-h4">Pricing Tables</div>
        <q-chip
          square
          size="3px"
          class="q-px-lg q-my-md"
          color="primary"
          text-color="white"
        >
        </q-chip
        ><br />
        <div class="text-caption q-mx-sm">
          Explore some of the best tips from around the city from our partners
          and friends.
        </div>
      </div>
    </div>
    <div :class="$q.screen.lt.sm ? 'q-mx-sm' : 'q-mx-xl'">
      <div class="row q-col-gutter-sm q-mt-lg">
        <PricingCard v-for="card in cards" :key="card" :card_data="card" />
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import PricingCard from "src/components/PricingCard.vue";
export default defineComponent({
  components: {
    PricingCard,
  },
  data() {
    return {
      cards: [
        {
          card_header_bg: "bg-blue",
          card_header_chip: "Basic",
          amount: "49",
          caption_1: "One Listing",
          caption_2: "90 Days Availability",
          caption_3: "Non-Featured",
          caption_4: "Limited Support",
          Footer_btnLabel: "Choose Basic",
          footerbtn_color: "blue",
        },
        {
          card_header_bg: "bg-green",
          card_header_chip: "Extended",
          amount: "99",
          caption_1: "Ten Listings",
          caption_2: "Lifetime Availability",
          caption_3: "Featured In Search Results",
          caption_4: "24/7 Support",
          Footer_btnLabel: "Choose Extended",
          footerbtn_color: "blue",
          icon: "check_circle",
          icon_label: "recommended",
        },
        {
          card_header_bg: "bg-blue",
          card_header_chip: "Professional",
          amount: "149",
          caption_1: "Unlimited Listings",
          caption_2: "Lifetime Availability",
          caption_3: "Featured In Search Results",
          caption_4: "24/7 Support",
          Footer_btnLabel: "Choose Basic",
          footerbtn_color: "blue",
        },
      ],
    };
  },
});
</script>

