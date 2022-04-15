<template>
  <div class="wrap">
    <Navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Navigation from "./nav/Navigation.vue";

export default {
  name: "Layout",
  components: {
    Navigation,
  },
};
</script>
<style scoped>
.wrap {
  width: 100vw !important;
  display: flex;
  padding: 0 !important;
  max-width: auto !important;
}
main {
  width: calc(100vw - 120px);
  /* background: rgb(15, 15, 15);; */
}
</style>
