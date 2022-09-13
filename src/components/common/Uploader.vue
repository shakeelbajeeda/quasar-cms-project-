<template>
  <q-dialog
    persistent
    height="auto"
    dialog="true"
    v-model:model-value="show"
    :name="dz_id"
    :ref="dz_id"
  >
    <q-card class="full-width coop-container">
      <q-card-section class="coop-section">
        <div class="modal-heading">
          {{ titleText }} <br />
          <span class="text-capitalize text-caption text-weight-light"
            >Maximum files allowed {{ max_num_of_files }}, Maximum file size
            allowed {{ max_file_size_in_mb }} MBs</span
          >
        </div>
      </q-card-section>

      <q-card-section class="coop-section">
        <q-uploader
          url=""
          hide-upload-btn
          method="POST"
          :multiple="multiple"
          autogrow
          :accept="mime_types"
          color="dark"
          text-color="white"
          class="full-width"
          :factory="sign"
          auto-upload
          :maxFiles="Number(max_num_of_files)"
          :maxFileSize="max_file_size_in_mb * 1000000"
          @uploaded="uploaded"
          @rejected="onRejected"
        />
        <div class="q-mt-md">
          <q-checkbox
            v-model="terms"
            label="By checking this box, I confirm that I own these photos or have express written permission from the property owner to use these photos.  These Photos are not considered the property of any other Multiple Listing Site or Service"
          />
          <span v-if="!terms" class="text-weight-bold text-negative"
            >Check box field is required</span
          >
        </div>
      </q-card-section>
      <q-card-section class="coop-section">
        <div class="full-width">
          <q-btn
            :label="buttonText"
            color="dark"
            class="float-right q-mb-lg"
            :disabled="upload_btn_disabled"
            @click="confirmModal"
          />
          <q-btn
            label="Cancel"
            color="grey"
            @click="cancelModal"
            class="float-right q-mb-lg q-mr-lg"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import { Notify } from "quasar";

export default {
  name: "S3Uploader",
  props: {
    dz_id: String,
    show: {
      type: Boolean,
      default: false,
    },
    url: String,
    titleText: {
      type: String,
      default: "Upload Photos / Documents",
    },
    buttonText: {
      type: String,
      default: "Upload Photos",
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    max_num_of_files: {
      type: Number,
      default: 1,
    },
    max_file_size_in_mb: {
      type: Number,
      default: 15,
    },
    mime_types: {
      type: String,
      default: "image/jpeg,image/heic,image/png,application/pdf",
    },
    type: {
      type: String,
      default: null,
    },
    uploadStatus: {
      type: String,
      default: "temp",
    },
  },
  data() {
    return {
      count: 0,
      item_list: [],
      upload_btn_disabled: true,
      terms: false,
    };
  },

  methods: {
    async sign(file) {
      let res = {
        url: `${this.apiUrl}/api/media`,
        fieldName: "file",
        headers: [
          {
            name: "data",
            value: JSON.stringify({
              type: this.type,
              parent_id: null,
              status: this.uploadStatus,
            }),
          },
          {
            name: "Authorization",
            value: `Bearer ${this.$store.state.auth.userToken}`,
          },
        ],
      };
      return Promise.resolve(res);
    },
    uploaded(info) {
      let data = JSON.parse(info.xhr.response);
      this.item_list.push(data.data);
      this.count++;
      this.upload_btn_disabled = false;
    },
    cancelModal() {
      this.$refs[this.dz_id].hide();
    },
    confirmModal() {
      if (this.terms) {
        let unique_photos = this.item_list.filter(
          (item, i, ar) => ar.indexOf(item) === i
        );
        this.$emit("items-added", unique_photos);
        this.item_list = [];
        this.$refs[this.dz_id].hide();
      } else {
        Notify.create({
          color: "negative",
          position: "top",
          message: "Please click on checkbox first!",
          icon: "warning",
        });
      }
    },
    onRejected(errors) {
      console.log(errors);
      if (
        errors.some((error) => error.failedPropValidation == "max-file-size")
      ) {
        Notify.create({
          color: "negative",
          position: "top",
          message: "Maximum file size exceeds",
          icon: "warning",
        });
      }
      if (errors.some((error) => error.failedPropValidation == "max-files")) {
        Notify.create({
          color: "negative",
          position: "top",
          message: "Maximum number of files exceeds",
          icon: "warning",
        });
      }
    },
  },
};
</script>
