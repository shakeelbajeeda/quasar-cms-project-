<template>
  <q-list>
    <q-item-label header> Main </q-item-label>
    <q-item
      group="same_group"
      v-for="item in items"
      :key="item"
      clickable
      target="_self"
      :to="item.link"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator inset />
    <q-btn
      label="Log Out"
      color="light-blue"
      class="q-my-md q-ml-md"
      to="/test btn"
    />
  </q-list>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "dashboard",
          link: "a",
        },
        {
          title: "Edit Profile",
          icon: "edit",
          link: "/UserDashboard",
        },
        {
          title: "Messages",
          icon: "mail",
          link: "n",
        },
        {
          title: "Change Password",
          icon: "lock_open",
          link: "/g",
        },
        {
          title: "My listings",
          icon: "list",
          link: "/op",
        },
        {
          title: "Bookings",
          icon: "event_available",
          link: "/k",
        },
        {
          title: "Reviews",
          icon: "reviews",
          link: "/k",
        },
        {
          title: "Add New",
          icon: "add_to_queue",
          link: "/a",
        },
      ],
    };
  },
};
</script>
