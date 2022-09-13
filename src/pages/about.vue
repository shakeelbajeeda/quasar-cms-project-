<template>
  <q-page>
    <div class="row flex-center">
      <div class="c-landing-bg text-center">
        <div class="q-pa-md height-width">
          <div class="row justify-between">
            <bgimg v-for="img in parallax_img" :key="img" :bg_img_data="img" />
          </div>
        </div>
        <div
          class="text-h3 q-mt-xs q-mt-xl q-mb-none q-mb-xl"
          :class="$q.screen.lt.md ? 'q-mb-none' : ''"
        ></div>
      </div>
    </div>
    <div class="col-12 q-pt-md">
      <div class="text-center">
        <div class="text-h4">How We Work</div>
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
          and friends
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="list-single-main-item-title fl-wrap">
          <span class="text-info text-center"><h3>Our Awesome Story</h3></span>
        </div>
        <div class="text-h6 text-center text-justify q-pa-md">
          Efficient $ource sees technology as the way to drive our business
          forward, we bring you more ways to reach prospective customers through
          a full range of digital and print marketing services. Whether it’s
          building a website for your business, promoting your services online,
          reaching out to our weekly readers, or printing your business cards
          and brochures, we are here to partner with your business.
        </div>
      </div>
      <div class="col-md-6 offset-md-3">
        <div class="list-single-main-item-title fl-wrap">
          <span class="text-info text-center"><h3>Our Mission</h3></span>
        </div>
        <div class="text-h6 text-center text-justify q-pa-md">
          Efficient $ource’s mission is to create a global network of trust
          enabling clients to turn uncertainty into confidence, risk into
          opportunity, and potential into prosperity. By helping our customers
          to deliver their products in a personalized and local way we certainly
          accomplish their objectives in an effective manner.
        </div>
      </div>
      <div class="col-md-6 offset-md-3">
        <div class="list-single-main-item-title fl-wrap">
          <span class="text-info text-center"><h3>Where are we?</h3></span>
        </div>
        <div class="text-h6 text-center text-justify q-pa-md">
          Efficient $ource covers counties in the northern New Jersey areas. Our
          team of experts is ready with a personalized and local approach to
          creating a strategic marketing plan for your business. We will save
          you time and money by coordinating a marketing campaign that will
          drive your business forward.
        </div>
      </div>
      <div class="col-md-6 offset-md-3">
        <div class="list-single-main-item-title fl-wrap">
          <span class="text-info text-center"
            ><h3>How We Do the Right Thing?</h3></span
          >
        </div>
        <div class="text-h6 text-center text-justify q-pa-md">
          Efficient $ource innate ability to connect with businesses, products
          and services is the secret of its success. We act with honesty,
          transparency, and integrity in working with each other and with our
          customers. We put the customer first of everything that we do. Our
          customers’ success is our success
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import bgimg from "src/components/bg_img.vue";
export default {
  components: { bgimg },
  data() {
    return {
      parallax_img: [
        {
          img_src: "/images/1.jpg",
          img_title: "About Our Company",
          color: "text-info",
        },
      ],
    };
  },
};
</script>
