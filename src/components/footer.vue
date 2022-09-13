<template>
  <!-- <div class="question-section-border">
        <div class="row bg-blue">
          <div class="col-5">
            <h4 class="">Do You Have Questions ?</h4>
            <p>Lorem ipsum dolor sit amet, harum dolor nec in, usu molestiae at no.</p>
          </div>
        </div>
      </div> -->
  <!-- footer about us section start -->
  <!-- <q-footer elevated class="bg-blue-9 text-white"> -->
  <div class="">
    <div class="bg-color-footer">
      <div class="row q-mx-xl q-mx-none-sm">
        <div class="col-md-3 col-sm-12 q-pa-md">
          <h5
            class="
              text-white
              heading-aboutus
              q-mt-lg
              text-weight-bolder text-weight-bolder
            "
            :class="$q.screen.lt.sm ? 'text-center' : ''"
          >
            About Us
          </h5>
          <p class="text-white q-pt-md text-left about-section-paragraph">
            In ut odio libero, at vulputate urna. Nulla tristique mi a massa
            convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          </p>

          <div class="icons-border-top">
            <q-icon class="material-icons text-blue-6" size="1.2rem"
              >mail_outline</q-icon
            >
            <span
              @click="getRoute('/')"
              class="text-white text-body1 q-pl-sm links-text"
            >
              Mail : @gmail.com
            </span>
          </div>

          <div class="q-mt-md">
            <q-icon name="fmd_good" class="text-blue-6" size="1.2rem"></q-icon>
            <span
              @click="getRoute('/')"
              class="text-white text-body1 q-pl-sm links-text"
              >Support@Nodesol.com</span
            >
          </div>

          <div class="q-mt-md">
            <q-icon name="phone" class="text-blue-6" size="1.2rem"></q-icon>
            <span
              @click="getRoute('/')"
              class="text-white text-body1 q-pl-sm links-text"
              >Phone : (5165456465)</span
            >
          </div>
        </div>
        <!-- footer about us section End -->

        <!-- footer our last section start -->

        <div class="col-md-3 q-pl-md col-sm-6 q-pa-md">
          <h5
            class="
              text-white
              heading-aboutus
              q-mt-lg
              text-weight-bolder text-weight-bolder
            "
            :class="$q.screen.lt.sm ? 'text-center' : ''"
          >
            Our Last News
          </h5>

          <q-list>
            <q-item clickable v-ripple class="heading-our-last-news">
              <q-item-section thumbnail>
                <img class="image-our-last-news" src="~assets/city.jpg" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-grey">
                  Vivamus dapibus rutrum</q-item-label
                >
                <q-item-label
                  caption
                  class="q-mt-xs text-blue-9 text-weight-bolder"
                >
                  21.Mar.21
                </q-item-label>
                <div class="caption-border-bottom q-mt-md"></div>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-mt-lg">
              <q-item-section thumbnail>
                <img class="image-our-last-news" src="~assets/city2.jpg" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-grey text-weight-bolder"
                  >In hac habitasse platea
                </q-item-label>

                <q-item-label
                  caption
                  class="q-mt-sm text-blue-9 text-weight-bolder"
                >
                  21.Mar.21
                </q-item-label>
                <div class="caption-border-bottom q-mt-md"></div>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple class="q-mt-lg">
              <q-item-section thumbnail>
                <img class="image-our-last-news" src="~assets/city3.jpg" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-grey text-weight-bolder"
                  >In hac habitasse platea
                </q-item-label>

                <q-item-label
                  caption
                  class="q-mt-sm text-blue-9 text-weight-bolder"
                >
                  21.Mar.21
                </q-item-label>
                <div class="caption-border-bottom q-mt-md"></div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <!-- footer about us section End -->

        <!-- footer Our twitter section start -->
        <div class="col-md-3 q-pl-md col-sm-6 q-pa-md">
          <h5
            class="
              text-white
              heading-aboutus
              q-mt-lg
              text-weight-bolder text-weight-bolder
            "
            :class="$q.screen.lt.sm ? 'text-center' : ''"
          >
            Our Twitter
          </h5>
          <div class="heading-our-last-news">
            <p
              class="color-paragraph-twiter q-mt-md text-grey"
              :class="$q.screen.lt.sm ? 'q-mr-lg' : ''"
            >
              Do you work with video? Help us improve our video offering by
              taking this quick 2 minute survey.
              <a class="text-black" href=" http://enva.to/cJjBP">
                http://enva.to/cJjBP</a
              >
            </p>
            <q-icon
              name="lab la-twitter"
              class="text-blue-6"
              size="1.2rem"
            ></q-icon>
            <a
              class="
                text-white
                text-caption
                text-white
                text-weight-bolder
                text-italic
              "
              href="http://enva.to/cJjBP"
              >Posted on Dec 18, 2017</a
            >

            <p
              class="color-paragraph-twiter text-grey q-mt-xl"
              :class="$q.screen.lt.sm ? 'q-mr-lg' : ''"
            >
              Cyber Monday Sale starts now! Check out all the amazing assets you
              can get for 50% off this week
              <a class="text-black" href=" http://enva.to/cJjBP">
                http://enva.to/cJjBP</a
              >
            </p>
            <q-icon
              name="lab la-twitter"
              class="text-blue-6"
              size="1.2rem"
            ></q-icon>
            <a
              class="
                text-white
                text-caption
                text-white
                text-weight-bolder
                text-italic
              "
              href="http://enva.to/cJjBP"
              >Posted on Dec 18, 2017</a
            >
          </div>
        </div>
        <!-- footer our twitter section end -->

        <!-- footer subscribe section start -->
        <div class="col-md-3 q-pl-lg col-sm-6 q-px-sm q-mt-md">
          <h5
            class="
              text-white
              heading-aboutus
              q-mt-lg
              text-weight-bolder text-weight-bolder
            "
            :class="$q.screen.lt.sm ? 'text-center' : ''"
          >
            Subscribe
          </h5>
          <p
            class="text-grey about-section-paragraph q-mt-lg text-weight-bolder"
          >
            Want to be notified when we launch a new template or an udpate. Just
            sign up and we'll send you a notification by email.
          </p>
          <q-input
            filled
            dense
            label="Email"
            class="w-300 bg-white text-black q-my-xs"
          />
          <q-btn
            class="bg-blue full-width"
            label="Subscribe"
            icon="wifi"
            filled
            type="textarea"
          />
        </div>
      </div>
    </div>
    <q-toolbar style="background: #24324f">
      <div class="col-12">
        <div class="row">
          <div class="col-md-3">
            <img
              class="q-ml-md"
              src="~assets/cityproject.png"
              width="60%"
              :class="$q.screen.lt.sm ? 'q-pt-sm' : 'q-py-md'"
            />
          </div>
          <div class="col-md-6">
            <div
              class="text-white text-center q-pt-lg"
              :class="$q.screen.lt.sm ? 'q-ml-md' : ''"
            >
              © CityBook 2018 . All rights reserved.
            </div>
          </div>
          <div class="col-md-3">
            <div
              class="float-right q-mr-md"
              :class="$q.screen.lt.sm ? '' : 'q-pt-md'"
            >
              <q-btn icon="facebook" color="blue" round flat />
              <q-btn icon="lab la-twitter" color="blue" round flat />
              <q-btn icon="lab la-chrome" color="blue" round flat />
              <q-btn icon="lab la-vk" color="blue" round flat />
              <q-btn icon="whatsapp" color="blue" round flat />
            </div>
          </div>
        </div>
      </div>
    </q-toolbar>
  </div>
</template>

  <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  methods: {
    getRoute(url) {
      this.$router.push(url);
    },
  },
});
</script>
  <style>
/* footer top section */
.gradient-bg {
  background-color: #3eaafd;
  background: -webkit-linear-gradient(top, #3eaafd, #49ceff);
}

.question-section-border {
  border-left: 1px solid;
}

/* footer about us section */
.heading-aboutus {
  font-size: 16px;
}

.bg-color-footer {
  background-color: #2c3b5a;
}

.about-section-paragraph {
  font-size: 12px;
  line-height: 24px;
  padding-bottom: 10px;
  font-weight: 500;
  color: #878c9f;
}

.about-section-paragraph {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid;
}

.icons-border-top {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed white;
}

.links-text {
  font-size: 15px;
}

/* footer about us section end */

/* footer our last news section start */

.last-news-section-image {
  border-radius: 4px;
}

.caption-border-bottom {
  border-bottom: 1px dashed white;
}

.heading-our-last-news {
  border-top: 1px solid white;
}

.image-our-last-news {
  border-radius: 5px;
  width: 100%;
}

.border-bottom-our-twitter {
  border-bottom: 1px solid white;
}

.color-paragraph-twiter {
  background: rgba(255, 255, 255, 0.11);
  font-weight: 700;
  border-radius: 6px;
  line-height: 24px;
  padding: 6px 12px;
  margin-bottom: 10px;
}

.w-300 {
  border-radius: 4px;
}

.w-md-383 {
  width: 383px;
  /*height: 28px;*/
}

/* footer our last news section end */
.footer-height {
  height: 5rem;
}
</style>
