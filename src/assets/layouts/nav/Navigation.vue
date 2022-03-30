<template>
  <div id="nav">
    <router-link
      :to="item.to"
      v-for="(item, idx) in navItems"
      :key="`item.title-${idx}`"
      >{{ item.title }}</router-link
    >
  </div>
</template>
<script>
import navItems from "./navItems.js";

export default {
  name: "Navigation",
  data() {
    return {
      navItems,
    };
  },
};
</script>
<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: #222;
}

#nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.452);
  display: block;
  font-size: 1.5vw;
  padding: 10px;
  border-radius: 5px;
  background: #464646;
  box-shadow: 1px 5px #303030;
  margin-bottom: 30px;
  transition: 0.3s;
  text-align: center;
}
#nav a:last-child {
  margin-bottom: 0;
}
#nav a.router-link-exact-active {
  background: #439663;
  box-shadow: 1px 5px #216039;
  color: #fff;
}
#nav a:active {
  box-shadow: 1px 2px #1f1f1f;
  transform: translateY(5px);
}
</style>
