<template>
  <v-container fluid class="down-top-padding">
    <v-col>
      <v-col class="d-flex justify-space-between align-center">
        <h1>게시판</h1>
        <v-btn @click="boardNew" color="primary" dark>글쓰기</v-btn>
      </v-col>
      <v-col>
        <v-data-table
          :headers="list.headers"
          :items="list.desserts"
          :items-per-page="10"
          class="elevation-1"
          @click:row="boardView"
        ></v-data-table>
      </v-col>
    </v-col>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "Board",
  data: () => ({
    list: {
      headers: [],
      desserts: [],
    },
  }),
  computed: {
    ...mapState( 'user', ['token']),
  },
  created() {
    if (!this.token) {
      alert('로그인 정보가 없습니다. 로그인해주세요!');
      this.$router.push('/auth/login');
    }
  },
  methods: {
    boardNew() {
      console.log('boardNew');
    },
    boardView() {
      console.log('boardView');
    },
  },
};
</script>
<style scoped></style>
