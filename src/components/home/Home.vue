<template>
  <v-container fluid class="down-top-padding">
    <v-col>
      <v-col>
        <v-row class="justify-space-between align-end">
          <v-row class="d-flex align-start mb-n4">
            <v-text-field v-model="search" label="검색"  class="d-inline-block mr-5 pa-0"/>
            <v-btn
              color="black"
              class="font-weight-bold body-1 white--text"
              @click="writeClick"
            >
              글쓰기
            </v-btn>
          </v-row>
        </v-row>
      </v-col>
      <v-col class="pa-0 mt-5">
        <v-data-table
          :headers="headers"
          :items="boards"
          :items-per-page="10"
          class="elevation-1"
          @click:row="boardView"
        ></v-data-table>
      </v-col>
    </v-col>
  </v-container>
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
/* #section1 {
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
} */
</style>
