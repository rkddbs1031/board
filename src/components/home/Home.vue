<template>
  <section id="section1">
    <div class="section1">
      <h3>당신의 기분상태로 음악을 추천해드려요 :)</h3>
      <span> 오늘 당신의 기분은 어떤가요? </span>
      <button @click="goMood" class="goMood">MOOD PLAY!</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goMood() {
      setTimeout(() => {
        this.$router.push('/mood');
      },500)
    },
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
  padding: 50px 80px;
  text-align: center;
  color: #fff; 
  border: 5px solid #666674;
  border-radius: 10px;
}
h3 {
  color: #f8f8f8;
  margin-bottom: 15px;
  font-size: 1.7vw;
}
span {
  color: #666674;
  font-size: 1.2vw;
  font-weight: bold;
}
.goMood {
  display: block;
  width: 140px;
  margin: 30px auto 0;
  border-radius: 10px;
  background: rgb(62 62 72);
  box-shadow: 1px 5px #2a2a36;
  padding: 15px;
  border: none;
  color: #f4f4f4;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}
.goMood:active {
  background: #439663;
  box-shadow: 1px 2px #216039;
  color: #fff;
  transform: translateY(5px);
}
</style>
