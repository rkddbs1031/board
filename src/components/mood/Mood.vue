<template>
  <section id="section1">
    <div class="section1">
      <div class="titleWrap">
        <h4>기분에 맞는 장르를 선택해주세요!</h4>
        <span class="heart">❤️</span>
      </div>
      <ul>
        <li v-for="(item,idx) in moodItems" :key="`item - ${idx}`">
          {{item.text}}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import moodItems from './moodItems.js';

export default {
  name: 'Mood',
  data() {
    return {
      moodItems,
    };
  },
  created() {
    console.log(this.moodItems);
  }
};
</script>
<style scoped>
#section1 {
  color: #f8f8f8;
  width: inherit;
}
.section1 {
  padding: 20px;
}
.section1 .titleWrap h4 {
  margin-bottom: 30px;
  display: inline-block;
  margin-right: 10px;
}
.section1 .titleWrap .heart {
  display: inline-block;
  animation: heartMove 2s forwards infinite;
}
@keyframes heartMove {
  from {
    transform: rotateY(0deg);
  } 
  to {
    transform: rotateY(360deg);
  }
}
.section1 ul {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background: rgb(24, 24, 24);
  flex-wrap: no-wrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.section1 li {
  width: 120px;
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #666674;
  border-radius: 10px;
  font-size: 18px;
  margin: 0 4px;
}
</style>