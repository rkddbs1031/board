<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.theme--light.v-application {
  background: #eef5f9 !important;
}
</style>