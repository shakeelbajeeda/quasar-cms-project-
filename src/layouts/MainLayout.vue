<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header-background">
      <Header />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import Header from "src/components/HeaderComponent/Header.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Header,
  },
});
</script>
<style scoped>
</style>
