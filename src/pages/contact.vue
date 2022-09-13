<template>
  <q-page class="page-layout">
    <div class="row flex-center">
      <div class="c-landing-bg text-center">
        <div class="height-width">
          <div class="row justify-between">
            <bgimg v-for="img in bg_img" :key="img" :bg_img_data="img" />
          </div>
        </div>
      </div>
    </div>
    <div class="cus-container q-pa-md">
      <div class="row">
        <div class="row q-gutter-md">
          <div class="col-md-6">
            <div class="list-single-main-item fl-wrap">
              <div class="list-single-main-item-title fl-wrap text-info">
                <h3>Contact <span>Details </span></h3>
              </div>
              <div class="list-single-main-media fl-wrap">
                <img src="~assets/images/12.jpg" class="responsive" />
              </div>
              <p>
                Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
                Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in
                mauris quis libero sodales eleifend. Morbi varius, nulla sit
                amet rutrum elementum, est elit finibus tellus, ut tristique
                elit risus at metus. In ut odio libero, at vulputate urna. Nulla
                tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
                suscipit commodo gravida.
              </p>
              <br />
              <div class="list-author-widget-contacts">
                <ul>
                  <li>
                    <span>
                      <q-icon name="location_on" color="info" size="20px" />
                      Address :</span
                    >
                    <a href="#" class="text-weight-bold">
                      114 WILLOW ST BLOOMFIELD, NJ 07003
                    </a>
                  </li>
                  <li>
                    <span
                      ><q-icon name="phone" color="info" size="20px" /> Phone
                      :</span
                    >
                    <a href="#" class="text-weight-bold">
                      (973) 429-0796 , (973) 390-5835
                    </a>
                  </li>
                  <li>
                    <span
                      ><q-icon name="email" color="info" size="20px" /> Mail
                      :</span
                    >
                    <a href="#" class="text-weight-bold">
                      Efficientsource@live.com
                    </a>
                  </li>
                  <li>
                    <span
                      ><q-icon name="language" color="info" size="20px" />
                      Website :</span
                    >
                    <a href="#" class="text-weight-bold">
                      www.efficientsource.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="list-single-main-wrapper fl-wrap">
              <h3>
                <span class="text-info q-mt-sm">Get In Touch</span>
              </h3>
              <q-form
                v-if="isRendered"
                @submit="addform"
                class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
              >
                <div>
                  <q-input
                    :rules="[
                      (val) => (val && val != '') || 'please type something',
                    ]"
                    class="q-mb-lg"
                    color="info"
                    filled
                    v-model="form.name"
                    bg-color="white"
                    label="Your Name"
                  />
                  <q-input
                    :rules="[
                      (val) => (val && val != '') || 'please type something',
                    ]"
                    class="q-mb-lg"
                    color="info"
                    filled
                    v-model="form.number"
                    bg-color="white"
                    label="Your Phone number"
                  />
                  <q-input
                    :rules="[
                      (val) => (val && val != '') || 'please type something',
                    ]"
                    class="q-mb-lg"
                    color="info"
                    filled
                    v-model="form.email"
                    bg-color="white"
                    label="Your Email Id"
                  />
                  <q-input
                    :rules="[
                      (val) => (val && val != '') || 'please type something',
                    ]"
                    bg-color="white"
                    v-model="form.comment"
                    filled
                    clearable
                    type="textarea"
                    color="info"
                    label="Your Comments"
                  />
                  <q-btn color="info" icon-right="send" label="Send" class="" />
                </div>
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cus-container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center text-info">Our Location</h3>
          <div style="border: #fff solid 8px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.4254468303184!2d-104.99043078445635!3d39.752555203687464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d8d1105723%3A0xdb3b6c054d8cb01!2s2139%20Curtis%20Street%2C%20Denver%2C%20CO%2080205%2C%20USA!5e0!3m2!1sen!2s!4v1632791578456!5m2!1sen!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
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
      isRendered: true,
      form: {},
      bg_img: [
        {
          img_src: "/images/2.jpg",
          img_title: "Contact US",
          color: "text-white",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-layout {
  background-color: #f6f6f6;
  color: #434343;
}
.cus-container {
  max-width: 1270px;
  margin: 0 auto;
}
</style>
