<template>
  <v-container>
    <v-card class="boardTable">
      <table class="table">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 80%" />
        </colgroup>
        <tbody>
          <tr class="tr border-bottom">
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
    <v-col class="text-right">
      <v-btn color="primary" class="font-weight-bold body-1 mr-2" @click="modify">수정하기</v-btn>
      <v-btn color="primary" class="font-weight-bold body-1" outlined @click="goBack">뒤로가기</v-btn>
    </v-col>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
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
    ...mapState( 'board', ['boardInfo']),
  },
  watch: {
    boardInfo( val ) {
      this.content = val.content;
    },
  },
  created() {
    this.getBoardDetail({ token: this.token, id: this.$route.params.id });
  },
  methods: {
    ...mapActions('board', ['getBoardDetail']),
    modify() {},
    goBack() {
      this.$router.go(-1);
    },
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
  }
  tbody {
    border-bottom: 1px solid #222;
  }
}
</style>