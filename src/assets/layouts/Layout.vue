<template>
  <div class="container">
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
.container {
  width: 100vw;
  display: flex;
}
main {
  max-width: 80%;
  display: flex;
  flex: 1 0 auto;
}
</style>
