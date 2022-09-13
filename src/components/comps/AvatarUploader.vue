<template>
  <q-file
    class="q-mt-md"
    color="teal"
    filled
    :label="holder"
    v-model="tempFile"
    :rules="[
      (val) => {
        if (this.is_required) {
          return true;
        } else if (val) {
          return true;
        } else {
          return 'Please Select an Image.';
        }
      },
    ]"
  >
    <template v-slot:prepend>
      <q-icon name="cloud_upload" />
    </template>
  </q-file>
</template>
<script>
export default {
  props: ["form", "file", "photo_id", "photo", "holder", "is_required",'uploadStatus'],
  data() {
    return {
      tempFile: null,
    };
  },
  methods: {
    async upload_avatar(e) {
      let data = {
        method: "post",
        url: "media",
        data: this.convertForm({ file: e, type: "User", status: this.uploadStatus }),
      };
      let res = await this.$store.dispatch("app/postApi", data);
      if (res.success) {
        this.form[this.photo_id] = res.data.id;
        this.form[this.photo] = process.env.API_URL + "/" + res.data.file;
        this.noti(res.message);
      }
    },
  },
  watch: {
    tempFile: function (e) {
      this.upload_avatar(e);
    },
  },
};
</script>
