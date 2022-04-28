<template>
  <v-container>
    <div class="delBtn text-right mt-10 mb-4">
      <v-btn color="primary" class="font-weight-bold body-1"  @click="goBack">목록보기</v-btn>
    </div>
    <v-card class="boardTable" v-if="boardInfo">
      <table class="table">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 90%" />
        </colgroup>
        <tbody>
          <tr class="tr">
            <th class="pa-5 border-right">제목</th>
            <td class="px-5">{{ boardInfo.title }}</td>
            <v-divider></v-divider>
          </tr>
          <tr height="400">
            <th class="pa-5 border-right">내용</th>
            <td class="px-5">
              <Viewer v-if="content != null" :initialValue="content" height="500px" />
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>
    <v-col class="text-right px-0">
      <v-btn color="error" class="font-weight-bold body-1 mr-3" outlined @click="del">삭제하기</v-btn>
      <v-btn color="primary" class="font-weight-bold body-1" @click="modify">수정하기</v-btn>
    </v-col>
  </v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/vue-editor';
// import CommentList from "./comment/CommentList";

export default {
  name: 'BoardDetail',
  components: {
    Viewer,
  },
  data: () => ({
    content: null,
  }),
  computed: {
    ...mapState( 'user', ['token']),
    ...mapState( 'board', ['boardInfo', 'boardSuccess']),
  },
  watch: {
    boardInfo( val ) {
      this.content = val.content;

      this.SET_BREADCRUMBS({
        title: '게시판',
        text: [
          { text: '게시판', disabled: false, href: '/board/list' },
          { text: '상세보기', disabled: true },
          { text: this.boardInfo.title, disabled: true },
        ],
      });
    },
    boardSuccess() {
      setTimeout(() => {
        this.$router.push('/board/list');
      }, 300);
    },
  },
  created() {
    this.getBoardDetail({ token: this.token, id: this.$route.params.id });

    
  },
  methods: {
    ...mapMutations( 'layout', ['SET_BREADCRUMBS']),
    ...mapMutations('board', ['resetBoard']),
    ...mapActions('board', ['getBoardDetail', 'delBoard']),
    modify() {
      this.$router.push(`/board/${this.$route.params.id}/edit`);
    },
    goBack() {
      this.$router.go(-1);
    },
    del() {
      if(confirm('정말 삭제하시겠습니까?')) {
        this.delBoard({token: this.token, id: this.$route.params.id});
      }
    },
  },
  destroyed() {
    this.resetBoard();
  },
};
</script>
<style lang="scss">
.boardTable {
  .table {
    width: 100%;
    border-top: 3px solid #222;
    border-bottom: 2px solid #222;
    border-collapse: collapse;
    .tr:nth-child(1) {
      border-bottom: 1px solid #222;
    }
    tr th {
      border-right: 1px solid rgba(34, 34, 34, 0.082);
    }
  }
  tbody {
    border-bottom: 1px solid #222;
  }
}
</style>