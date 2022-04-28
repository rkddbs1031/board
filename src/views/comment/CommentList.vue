<template>
  <v-container>
    <v-card>
      <v-card-title>댓글달기</v-card-title>
      <v-card-text class="d-flex pb-0 ">
        <v-text-field
          v-model="commentValue"
          placeholder="댓글을 입력해 주세요."
          outlined dense
          class="mr-5"
          hide-details
          @keyup.enter="commentSubmit"
        />
        <v-btn color="primary" outlined @click="commentSubmit">확인</v-btn>
      </v-card-text>
      <v-list>
        <v-list-item
          v-for="(item, idx) in comments"
          :key="idx"
          class="list mx-4 pa-0"
        >
          <v-list-item-content class="pl-3">{{ item.content }}</v-list-item-content>
          <v-btn class="ma-0" @click="commentDel(item)" outlined text >삭제</v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  name: 'CommentList',
  data: () => ({
    commentValue: '',
  }),
  computed: {
    ...mapState( 'user', ['token']),
    ...mapState('comment', ['comments', 'commentSuccess']),
  },
  watch: {
    commentSuccess(val) {
      if(val === 200) {
         this.getList();
      }
    },
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapMutations('comment', ['resetComment']),
    ...mapActions('comment', ['getComment', 'postComment', 'delComment']),
    getList() {
      this.getComment({ token: this.token, id: this.$route.params.id });
    },
    commentSubmit() {
      this.commentValue = this.commentValue.trim();
      if (!this.commentValue.length > 0) {
        alert('댓글을 입력해주세요');
      } else {
        this.resetComment();
        this.postComment({
          token: this.token,
          id: this.$route.params.id,
          content: this.commentValue
        });
        this.commentValue = '';
      }
    },
    commentDel( item ) {
      this.resetComment();
      this.delComment({ 
        token: this.token,
        id: this.$route.params.id,
        commentId: item.id
      });
    },
  },
};
</script>
<style scoped>
.list {
  border-bottom: 1px solid #eee;;
}
</style>