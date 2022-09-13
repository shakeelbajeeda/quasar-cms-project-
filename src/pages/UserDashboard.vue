<template>
  <q-page>
    <div class="q-py-xl" :class="$q.screen.gt.xs ? 'q-mx-xl' : 'q-mx-md'">
      <TopRow v-for="toprow in TopRowData" :key="toprow" :row_data="toprow" />
      <div class="row q-mt-lg q-col-gutter-md">
        <div class="col-md-3 col-xs-12">
          <div class="bg-color">
            <SideBar />
          </div>
        </div>
        <div class="col-md-7 col-xs-12">
          <q-form class="q-gutter-md custom-form">
            <q-item-label
              header
              class="text-body1 q-pt-none q-pl-none text-bold"
              >My Account</q-item-label
            >
            <q-input
              v-for="input in inputs"
              :key="input"
              filled
              bottom-slots
              v-model="input.vmodel"
              :type="input.type"
              :label="input.label"
            >
              <template v-slot:prepend>
                <q-icon :name="input.icon" color="blue-3" />
              </template>
            </q-input>
          </q-form>
          <q-item-label class="text-body1 text-bold q-pl-none" header
            >Tariff Plan</q-item-label
          >
          <div class="row q-col-gutter-md q-mb-lg">
            <div
              class="col-md-4 col-xs-12"
              v-for="checkbox in checkboxes"
              :key="checkbox"
            >
              <q-checkbox
                style="width: 100%"
                v-model="checkbox.vModel"
                :label="checkbox.label"
                class="bg-color"
              />
            </div>
          </div>
          <q-separator />
          <q-form class="q-gutter-md q-mt-lg custom-form">
            <q-item-label
              header
              class="text-body1 q-pt-none q-pl-none text-bold"
              >My Socials</q-item-label
            >
            <q-input
              v-for="input in Socialinputs"
              :key="input"
              filled
              bottom-slots
              :placeholder="input.placeholder"
              :type="input.type"
            >
              <template v-slot:prepend>
                <q-icon :name="input.icon" color="blue-3" />
              </template>
            </q-input>
          </q-form>
          <q-btn
            color="light-blue"
            label="Save Changes"
            icon-right="navigate_next"
            to="#"
          />
        </div>
        <div class="col-md-2 col-xs-12">
          <q-img
            src="~assets/images/4.jpg "
            :ratio="1"
            spinner-color="primary"
            spinner-size="82px"
          />
          <label
            class="
              custom-file-upload
              q-mt-md
              bg-light-blue
              text-white text-caption
            "
            rounded
          >
            <input type="file" />
            <i class="fa fa-upload"></i> Custom Upload
          </label>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import TopRow from "src/components/UserDashboard/dashboardTopRow.vue";
import SideBar from "src/components/UserDashboard/Sidebar.vue";

export default defineComponent({
  name: "UserDashboard",
  components: {
    TopRow,
    SideBar,
  },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const basic = ref(false);
    const extended = ref(false);
    const professional = ref(false);

    return {
      name,
      basic,
      extended,
      professional,
    };
  },
  data() {
    return {
      TopRowData: [
        {
          row_heading: "Edit Profile",
          link1_label: "Home",
          link1: "/pricing",
          link2_label: "Dashboard",
          link2: "/pricing",
          link3_label: "Edit Profile",
          link3: "UserDashboard",
        },
      ],
      inputs: [
        {
          label: "Your Name *",
          icon: "person",
        },
        {
          label: "Your Email *",
          icon: "mail",
        },
        {
          label: "Phone",
          icon: "phone",
        },
        {
          label: "Address",
          icon: "place",
        },
        {
          label: "Website",
          icon: "public",
        },
        {
          label: "About Me",
          type: "textarea",
        },
      ],
      checkboxes: [
        {
          vModel: "basic",
          label: "Basic 49$",
        },
        {
          vModel: "extended",
          label: "Extended 99$",
        },
        {
          vModel: "professional",
          label: "Professional 149$",
        },
      ],
      Socialinputs: [
        {
          placeholder: "https://www.facebook.com/",
          icon: "lab la-facebook-f",
        },
        {
          placeholder: "https://twitter.com/",
          icon: "lab la-twitter",
        },
        {
          placeholder: "vk.com",
          icon: "lab la-vk",
        },
        {
          placeholder: "https://www.whatsapp.com",
          icon: "whatsapp",
        },
      ],
    };
  },
});
</script>
<style scoped>
.bg-color {
  background: #f8fbfe;
  border: 1px solid #eee;
  border-radius: 5px;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
