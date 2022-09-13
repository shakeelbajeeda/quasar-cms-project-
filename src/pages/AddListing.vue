<template>
  <div>
    <div class="row">
      <div class="col-12">
        <!-- <Navbar /> -->
        <div
          class="q-mb-none text-center"
          :class="$q.screen.lt.md ? 'q-mb-none' : ''"
        >
          <div class="page-container bg-white shadow-2">
            <!-- <v-card> -->
            <div class="row justify-center">
              <span class="text-h4 text-blue-6 q-mt-lg">
                {{ $t("Upload_Listing") }}
              </span>
            </div>
            <!-- <q-card-section> -->
            <q-form @submit="addform" class="q-gutter-md">
              <div class="row justify-center">
                <div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">
                  <div
                    class="container"
                    :class="$q.screen.gt.sm ? 'q-ma-lg' : 'q-mt-md'"
                  >
                    <!-- Ad Section -->
                    <div :class="$q.screen.gt.sm ? 'q-ml-md' : 'q-mt-md'">
                      <q-expansion-item
                        v-model="expanded"
                        switch-toggle-side
                        :label="$t('Ad_Information')"
                        class="shadow-1 q-mt-md"
                        header-class="bg-blue-grey-10 text-white"
                      >
                        <div class="q-pa-lg">
                          <MultiplePhotosShow v-model:form="form" />
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <!-- <label class="float-right q-mt-sm q-mr-md">
                                  Upload Photos
                                </label> -->
                              </p>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-11 col-lg-11"
                            >
                              <div class="q-py-md">
                                <q-btn
                                  class="q-mt-md q-mb-md"
                                  icon="cloud_upload"
                                  color="black"
                                  :label="$t('Upload_Photos')"
                                  @click="uploadPhotos"
                                />
                                <Uploader
                                  @items-added="addPhotos"
                                  :max_num_of_files="40"
                                  mime_types="image/jpeg,image/png"
                                  :dz_id="uploaderId"
                                  title-text="Upload Photos"
                                  v-model="photosModal"
                                  type="Listing"
                                  uploadStatus="temp"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <div class="row justify-end">
                                <q-avatar class="q-mx-md">
                                  <img v-if="form.photo" :src="form.photo" />
                                  <img v-else src="~assets/2351449-200.png" />
                                </q-avatar>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <AvatarUploader
                                v-model:form="form"
                                :is_required="slug"
                                file="file"
                                photo_id="photo_id"
                                photo="photo"
                                holder="Upload Thumbnail"
                                uploadStatus="temp"
                              />
                            </div>
                            <div class="col-1 gt-sm">
                              <br />
                              <div class="row justify-end">
                                <q-avatar class="q-mx-md">
                                  <img
                                    v-if="form.sp_photo"
                                    :src="form.sp_photo"
                                  />
                                  <img v-else src="~assets/2351449-200.png" />
                                </q-avatar>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <AvatarUploader
                                v-model:form="form"
                                :is_required="slug"
                                file="sp_file"
                                photo_id="sp_photo_id"
                                photo="sp_photo"
                                holder="Upload Spanish Thumbnail"
                                uploadStatus="temp"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Title")
                                }}</label>
                              </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <q-input
                                type="text"
                                row="15"
                                class="q-mt-md"
                                :placeholder="$t('Enter_Title')"
                                filled
                                :label="$q.screen.lt.md ? $t('Title') : ''"
                                v-model="form.title"
                                :rules="[
                                  (val) =>
                                    (val && val.length > 0) ||
                                    $t('Please_type_something'),
                                ]"
                              />
                            </div>
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Enter_Spanish_Title")
                                }}</label>
                              </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <q-input
                                type="text"
                                row="15"
                                class="q-mt-md"
                                :placeholder="$t('Enter_Spanish_Title')"
                                filled
                                :label="
                                  $q.screen.lt.md ? $t('Spanish_Title') : ''
                                "
                                v-model="form.sp_title"
                                :rules="[
                                  (val) =>
                                    (val && val.length > 0) ||
                                    $t('Please_type_something'),
                                ]"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Description")
                                }}</label>
                              </p>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-11 col-lg-11"
                            >
                              <TextEditor
                                class="q-mt-md"
                                v-model:content="form.description"
                                @updateContent="updateDescription"
                              />
                            </div>
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">
                                  {{ $t("Spanish_Des.") }}
                                </label>
                              </p>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-11 col-lg-11"
                            >
                              <TextEditor
                                class="q-mt-md"
                                v-model:content="form.sp_description"
                                @updateContent="updateSPDescription"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Slug")
                                }}</label>
                              </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <q-input
                                type="text"
                                row="15"
                                class="q-mt-md"
                                :placeholder="$t('Slug')"
                                filled
                                :label="$q.screen.lt.md ? $t('Slug') : ''"
                                v-model="form.slug"
                                :disable="true"
                              />
                            </div>
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">
                                  {{ $t("Price") }}
                                </label>
                              </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <q-input
                                type="Number"
                                row="15"
                                class="q-mt-md"
                                :placeholder="$t('Price')"
                                filled
                                :label="$q.screen.lt.md ? $t('Price') : ''"
                                v-model="form.price"
                                :rules="[
                                  (val) =>
                                    (val && val.length > 0) ||
                                    $t('Please_type_something'),
                                ]"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-1 gt-sm">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Category")
                                }}</label>
                              </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                              <CategorySelect v-model:form="form" />
                            </div>

                            <div class="col-xs-3 col-sm-3 col-md-1 col-lg-1">
                              <br />
                              <p>
                                <label class="float-right q-mt-sm q-mr-md">{{
                                  $t("Featured")
                                }}</label>
                              </p>
                            </div>
                            <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1">
                              <q-toggle
                                v-model="form.featured"
                                color="green"
                                class="q-mt-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </q-expansion-item>
                      <AddressAndContact
                        v-model:form="form"
                        v-model:addressExpanded="addressExpanded"
                        v-model:contactExpanded="contactExpanded"
                      />
                      <div class="row justify-end">
                        <q-btn
                          type="submit"
                          :loading="submitting"
                          :label="$t('Create')"
                          class="q-my-md float-right"
                          color="teal"
                          style="width: 250px"
                        >
                          <template v-slot:loading>
                            <q-spinner-facebook />
                          </template>
                        </q-btn>
                      </div>
                    </div>
                  </div>

                  <!-- Ad Section Ends Here -->
                </div>
                <!--- Main  Section Ends Here -->
                <br />
              </div>
            </q-form>
            <!--Row Start-->
            <!-- </q-card-section> -->
            <!-- </v-card> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextEditor from "components/TextEditor/TextEditor";
import Uploader from "components/common/Uploader";
import CategorySelect from "components/comps/CategorySelect";
import AvatarUploader from "components/comps/AvatarUploader";
import MultiplePhotosShow from "components/comps/MultiplePhotosShow";
// import Navbar from "pages/landing_pages/Navbar.vue";
import AddressAndContact from "pages/AddressAndContact.vue";
export default {
  name: "view",
  data() {
    return {
      expanded: true,
      addressExpanded: true,
      contactExpanded: true,
      photosModal: false,
      slug: this.$route.params.slug == "new" ? "" : this.$route.params.slug,
      form: {
        description: null,
        sp_description: null,
        is_active: true,
        address: {},
        photos: [],
        featured: false,
        contact: { type: "with_listing" },
      },
    };
  },
  // computed: {
  //   uploaderId() {
  //     return "photos-dz-" + (this.form ? this.form.id : "default");
  //   },
  // },

  components: {
    CategorySelect,
    TextEditor,
    Uploader,
    AvatarUploader,
    MultiplePhotosShow,
    // Navbar,
    AddressAndContact,
  },
  methods: {
    uploadPhotos() {
      this.photosModal = true;
    },
    addPhotos(urls) {
      urls.map((row) => {
        this.form.photos.push(row);
      });
    },
    async addform() {
      let data = {
        method: "post",
        url: "store/listings",
        data: this.form,
      };
      let res = await this.$store.dispatch("app/postApi", data);
      if (res.success) {
        this.noti(res.message);
        this.$router.push("/");
      }
    },
    updateDescription(content) {
      this.form.description = content;
    },
    updateSPDescription(content) {
      this.form.sp_description = content;
    },
  },
  async created() {
    if (this.slug) {
      this.form.is_active = false;
      this.form.featured = this.form.featured ? true : false;
    }
  },
};
</script>
