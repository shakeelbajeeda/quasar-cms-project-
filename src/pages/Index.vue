<template>
  <q-page>
    <Homecarousel/>
    <!-- Home Parallax with Search bar -->
    <div>
      <HomeParallax
        v-for="parallax in Qparallax"
        :key="parallax"
        :parallax_data="parallax"
      />
    </div>
    <!-- Home Parallax end -->
    <!-- Categories Code -->
    <div class="col-12 q-pt-xl">
      <div class="text-center">
        <div class="text-h4">Featured Categories</div>
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
    <div :class="$q.screen.lt.sm ? 'q-mx-sm' : 'q-mx-xl'" class="q-mt-xl">
      <div class="col-md-12">
        <div class="row q-col-gutter-sm">
          <div
            class="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            v-for="category in Categories"
            :key="category"
            v-bind="category"
          >
            <q-img
              :src="category.img"
              spinner-color="white"
              class="rounded-borders"
              :height="category.height"
            >
              <div class="absolute-bottom text-body1 text-bold">
                {{ category.title }} <br />
                <span class="text-caption q-pa-none">{{
                  category.caption
                }}</span>
              </div>
            </q-img>
          </div>
        </div>
        <div class="text-center q-mt-lg">
          <q-btn
            label="View All"
            color="blue"
            icon-right="visibility"
            rounded
          />
        </div>
      </div>
    </div>
    <!-- Categories code end -->
    <!-- Popular listing slider code start here -->
    <div class="col-12 q-pt-xl">
      <div class="text-center">
        <div class="text-h4">Popular listings</div>
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
          Nulla tristique mi a massa convallis cursus. Nulla eu mi magna.
        </div>
      </div>
    </div>
    <div
      class="col-12 q-pt-xl"
      :class="$q.screen.lt.sm ? 'q-mx-sm' : 'q-mx-xl'"
    >
      <div class="row q-col-gutter-md">
        <div
          class="col-md-3 col-sm-6 col-xs-12"
          v-for="card in ListingCards"
          :key="card"
          :v-bind="card"
        >
          <q-card class="my-card img">
            <img :src="card.img" class="hover-zoom" />

            <q-card-section>
              <div class="text-h6">{{ card.title }}</div>
              <div class="text-caption">
                {{ card.caption }}
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-rating
                v-model="ratingModel"
                size="1em"
                :max="5"
                color="orange"
              />
              <span class="q-pl-sm" style="font-size: 10px; opacity: 0.7">{{
                card.review
              }}</span>
              <q-separator color="grey-4" class="q-mt-sm" />
            </q-card-section>
            <q-card-section>
              <q-icon name="place" color="blue" size="1rem" />
              <span class="q-pl-sm" style="font-size: 13px; opacity: 0.7">{{
                card.location
              }}</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
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
      <div class="row q-col-gutter-sm q-mt-lg">
        <PricingCard v-for="card in cards" :key="card" :card_data="card" />
      </div>
    </div>
    <div class="q-mt-xl">
      <FooterVue/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import HomeParallax from "src/components/HomeParallax.vue";
import PricingCard from "src/components/PricingCard.vue";
import FooterVue from "src/components/footer.vue";
import Homecarousel from "src/components/carousel.vue";

export default defineComponent({
  name: "Index",
  components: {
    HomeParallax,
    PricingCard,
    FooterVue,
    Homecarousel,
  },
  setup() {
    return {
      ratingModel: ref(3),
    };
  },
  data() {
    return {
      Qparallax: [
        {
          img_src: "images/32.jpg",
          img_title: "We will help you to find all",
          color: "text-white",
          caption: "Find great places , hotels , restourants , shops.",
        },
      ],
      Categories: [
        {
          img: "images/img-1.jpg",
          title: "Conference and Event",
          caption:
            "Constant care and attention to the patients makes good record",
          height: "261px",
        },
        {
          img: "images/img-2.jpg",
          title: "Cafe - Pub",
          caption:
            "Constant care and attention to the patients makes good record",
          height: "261px",
        },
        {
          img: "images/img-3.jpg",
          title: "Gym - Fitness",
          caption:
            "Constant care and attention to the patients makes good record",
          height: "261px",
        },
        {
          img: "images/img-4.jpg",
          title: "Hotels",
          caption:
            "Constant care and attention to the patients makes good record",
          height: "261px",
        },
        {
          img: "images/img-5.jpg",
          title: "Shop - Store",
          caption:
            "Constant care and attention to the patients makes good record",
          height: "261px",
        },
      ],
      ListingCards: [
        {
          img: "images/img-6.jpg",
          title: "Best deal For the Cars",
          caption: "Lorem ipsum gravida nibh vel velit",
          review: "(11 Reviews)",
          location: "27th Brooklyn New York,NY  10065",
        },
        {
          img: "images/img-7.jpg",
          title: 'Cafe "Lollipop"',
          caption: "Morbi suscipit erat in diam bibendum.",
          review: "(7 Reviews)",
          location: "27th Brooklyn New York,NY  10065",
        },
        {
          img: "images/img-5.jpg",
          title: "Shop in Boutique Zone",
          caption: "Morbiaccumsan ipsum velit tincidunt.",
          review: "(16 Reviews)",
          location: "27th Brooklyn New York,NY  10065",
        },
        {
          img: "images/img-1.jpg",
          title: "Event in City Mol",
          caption: "Morbiaccumsan ipsum velit tincidunt.",
          review: "(15 Reviews)",
          location: "27th Brooklyn New York,NY  10065",
        },
      ],
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
<style scoped>
.img {
  overflow: hidden;
}
.hover-zoom:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
</style>
