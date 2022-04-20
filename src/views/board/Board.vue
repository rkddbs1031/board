<template>
  <v-container fluid class="down-top-padding">
    <v-col>
      <v-col class="d-flex justify-space-between align-center">
        <h1>게시판</h1>
        <v-btn @click="boardNew" color="primary" dark>글쓰기</v-btn>
      </v-col>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          class="elevation-1"
          @click:row="boardView"
        >
        <template v-slot:[`item.createdAt`]="{ item }">
          <td>{{ new Date(item.createdAt).toLocaleString() }}</td>
        </template>
      </v-data-table>
      </v-col>
      <!-- // table -->
    </v-col>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "Board",
  data: () => ({
    headers: [
      { 
        text: 'no',
        value: "id",
        sortable: false,
        width: '10%',
      },
      {
        text: '제목',
        value: 'title',
        sortable: false,
      },
      {
        text: '작성일시',
        value: 'createdAt',
        sortable: false,
        width: '25%',
      },
    ],
  }),
  computed: {
    ...mapState( 'user', ['token']),
    ...mapState( 'list', [ 'items' ]),
  },
  created() {
    if (!this.token) {
      alert('로그인 정보가 없습니다. 로그인해주세요!');
      this.$router.push('/auth/login');
    } else {
      this.list();
    }
  },
  methods: {
    ...mapActions( 'list', ['getBoard']),
    list() {
      this.getBoard({ token: this.token });
    },
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
