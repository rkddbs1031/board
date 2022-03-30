<template>
  <section id="section1">
    <div class="section1">
      <h2>home</h2>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style scoped>
#section1 {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section1 {
  background: #fff;
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
}
h2 {
  color: #222;
}
</style>
