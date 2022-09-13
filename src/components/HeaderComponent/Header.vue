<template>
  <q-toolbar class="text-white q-my-sm">
    <q-img src="~assets/images/logo.png" width="150px" class="q-mx-sm" />
    <q-separator dark vertical inset />
    <q-space />
    <q-btn-dropdown
      group="same_group"
      v-for="dropdown in dropdowns"
      :key="dropdown"
      :class="[
        dropdown.sub_menu.length ? '' : 'custom-dropdown',
        getClass(dropdown.path, dropdown.sub_menu),
      ]"
      class="text-capitalize gt-sm"
      :label="dropdown.label"
      :default-opened="isExpended(dropdown)"
      :to="dropdown.link"
      :icon="dropdown.dropdown_icon"
      stretch
      flat
    >
      <q-list>
        <q-item
          clickable
          v-close-popup
          tabindex="0"
          v-for="sub_item in dropdown.sub_menu"
          :key="sub_item.link"
          v-bind="sub_item"
          v-ripple
          class="custom-item"
          :to="sub_item.link"
        >
          <q-item-section>
            <q-item-label>{{ sub_item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      flat
      dense
      round
      icon="menu"
      class="lt-md q-mr-sm"
      aria-label="Menu"
      @click="toggleRightDrawer"
    />
    <!-- <q-btn
      flat
      class="text-capitalize gt-xs"
      :class="$q.screen.lt.sm ? 'q-pa-none' : 'q-mr-sm'"
      to="#"
    >
      <q-icon name="login" size="1rem" class="q-mr-xs" />
      sign in
    </q-btn> -->
    <q-separator dark vertical inset class="q-mx-sm gt-sm" />
    <q-btn
      label="add listings"
      icon-right="add"
      rounded
      color="light-blue"
      class="q-ml-sm q-mr-lg gt-sm"
      to="/AddListing"
    />
    <q-drawer
      v-model="rightDrawerOpen"
      class="bg-dark"
      side="right"
      overlay
      elevated
    >
      <q-list
        bordered
        separator
        class="text-center text-white text-uppercase text-subtitle1"
      >
        <q-expansion-item
          group="same_group"
          v-for="item in dropdowns"
          :key="item"
          class="q-py-sm text-subtitle1"
          :class="item.sub_menu.length ? '' : 'custom-exp'"
          :icon="item.icon"
          :label="item.label"
          :to="item.sub_menu.length ? '' : item.link"
          :default-opened="isExpended(item)"
        >
          <q-card-section>
            <q-list
              class="
                text-center
                bg-dark
                text-white text-uppercase text-subtitle1
              "
              bordered
            >
              <q-item
                v-for="sub_item in item.sub_menu"
                :key="sub_item.link"
                v-bind="sub_item"
                clickable
                v-ripple
                class="q-py-sm"
                :to="sub_item.link"
              >
                <q-item-sec>
                  <q-icon :name="sub_item.icon" size="1.6rem" />
                </q-item-sec>
                <q-item-section>{{ sub_item.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-expansion-item>
      </q-list>
    </q-drawer>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",

  setup() {
    const rightDrawerOpen = ref(false);
    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },

  data() {
    return {
      is_match_found: false,
      dropdowns: [
        {
          label: "home",
          path: "/",
          icon: "home",
          sub_menu: [
            {
              label: "Parallax Image",
              link: "/",
              icon: "",
            },
            {
              label: "Video",
              link: "/test",
              icon: "",
            },
            {
              label: "Map",
              link: "a",
              icon: "",
            },
          ],
        },
        {
          label: "listings",
          icon: "list",
          path: "/test",
          sub_menu: [
            {
              label: "photo",
              link: "test",
              icon: "",
            },
            {
              label: "video",
              link: "test.vue",
              icon: "",
            },
          ],
        },
        {
          label: "news",
          icon: "newspaper",
          path: "",
          link: "d",
          sub_menu: [],
        },
        {
          label: "pages",
          icon: "pages",
          path: "/pricing",
          sub_menu: [
            {
              label: "About",
              link: "about",
              icon: "",
            },
            {
              label: "Contacts",
              link: "contact-us",
              icon: "",
            },
            {
              label: "User single",
              link: "#",
              link: "/contact-us",
              icon: "",
            },
            {
              label: "Pricing",
              link: "/pricing",
              icon: "",
            },
            {
              label: "User Dashboard",
              link: "/UserDashboard",
              icon: "",
            },
          ],
        },
        {
          label: "sign in",
          icon: "login",
          dropdown_icon: "login",
          path: "",
          link: "a",
          sub_menu: [],
        },
      ],
    };
  },
  methods: {
    isExpended(list_item) {
      if (this.is_match_found) {
        return false;
      }
      if (list_item.sub_menu) {
        this.is_match_found = list_item.sub_menu.find((sub_item) => {
          return sub_item.link == this.$route.path;
        });
      }
      if (this.is_match_found) {
        return true;
      }
    },
    getClass(path, sub_menues) {
      let clss = "";
      if (this.$route.path == path) {
        clss = "custom-active";
      }
      if (sub_menues.length) {
        let is_match = sub_menues.find((item) => {
          return this.$route.path == item.link;
        });
        if (is_match) {
          clss = "custom-active";
        }
      }
      return clss;
    },
  },
});
</script>
