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
  display: flex;
  flex: 1 0 auto;
  background: rgb(15, 15, 15);;
}
</style>
