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
  width: calc(100vw - 120px);
  background: rgb(15, 15, 15);;
}
</style>
