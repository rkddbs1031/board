<template>
  <v-container  class="down-top-padding">
    <v-col>
      <v-col class="d-flex justify-space-between align-center">
        <BaseTitle title="게시판" />
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
import BaseTitle from '@/components/BaseTitle.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: "Board",
  components: { BaseTitle },
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
    ...mapState( 'board', [ 'items' ]),
  },
  created() {
    if (!this.token) {
      alert('로그인 정보가 없습니다. 로그인해주세요!');
      this.$router.push('/auth/login');
    } else {
      this.list();
    }

    this.SET_BREADCRUMBS({
      title: '게시판',
      text: [
        { text: '게시판', disabled: true },
        { text: '리스트', disabled: true },
      ],
    });
  },
  methods: {
    ...mapMutations( 'layout', ['SET_BREADCRUMBS']),
    ...mapActions( 'board', ['getBoard']),
    list() {
      this.getBoard({ token: this.token });
    },
    boardNew() {
      this.$router.push('/board/new');
    },
    boardView( row ) {
      this.$router.push(`/board/${row.id}`);
    },
  },
};
</script>
<style scoped></style>
