<template>
  <v-container class="pt-14">
    <v-card class="pa-5">
      <v-form  lazy-validation>
        <v-col class="d-flex">
          <v-text-field
            v-model="title"
            required
            label="제목"
            placeholder="제목을 입력해 주세요."
            :rules="[rules.required]"
          />
        </v-col>
        <v-col>
          <Editor 
            v-if="content != null"
            :options="editorOptions"
            initialEditType="wysiwyg"
            :initialValue="content"
            ref="toastuiEditor"
            height="500px"
          />
        </v-col>
        <v-col class="text-right">
          <v-btn color="primary" class="font-weight-bold body-1 mr-2" @click="modify">저장하기</v-btn>
          <v-btn color="primary" class="font-weight-bold body-1" outlined @click="goBack">취소</v-btn>
        </v-col>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/vue-editor';

export default {
  name: 'BoardModify',
  components: { Editor },
  data: () => ({
    title: '',
    content: '',
    imageData: [],
    imageSelect: [],
    editorOptions: {
      language: 'ko',
      hideModeSwitch: true,
      toolbarItems: [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ],
      placeholder: '게시글을 작성해 주세요.',
      plugins: [colorSyntax],
    },
    rules: {
      required: ( v ) => !!v || '필수 입력값입니다.',
    },
  }),
  computed: {
    ...mapState( 'user', ['token']),
    ...mapState( 'board', ['boardInfo', 'boardSuccess']),
  },
  watch: {
    boardSuccess() {
      setTimeout(() => {
        this.$router.push('/board/list');
      }, 300);
    },
  },
  created() {
    this.getBoardDetail({ token: this.token, id: this.$route.params.id });
    
    this.title = this.boardInfo.title;
    this.content = this.boardInfo.content;
    this.imageData = this.boardInfo.files;

    this.SET_BREADCRUMBS({
      title: '게시판',
      text: [
        { text: '게시판', disabled: false, href: '/board/list' },
        { text: '수정', disabled: true },
        { text: this.boardInfo.title, disabled: true },
      ],
    });
  },
  mounted() {
    const instance = this.$refs.toastuiEditor;

    instance.invoke("addHook", "addImageBlobHook", (blob, callback) => {
      (async () => {
        const formData = new FormData();
        formData.append("files", blob);
        const headers = {
          'X-AUTH-TOKEN': this.token,
          'content-type': 'multipart/formdata',
        };
        await axios.post(`${process.env.VUE_APP_API_URL}/api/files`, formData, { headers })
          .then((res) => {
            if (res) {
              const data = res.data.data[0].url;
              this.imageSelect = data;
              this.imageData.push(res.data.data[0]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        const imageUrl = this.imageSelect;
        callback(imageUrl, blob.name);
      })();
      return false;
    });
  },
  methods: {
    ...mapMutations( 'layout', ['SET_BREADCRUMBS']),
    ...mapMutations('board', ['resetBoard']),
    ...mapActions('board', ['getBoardDetail', 'putBoard']),
    modify() {
      this.content = this.$refs.toastuiEditor.invoke("getHTML");
      
      this.putBoard({
        token: this.token,
        title: this.title,
        content: this.content,
        files: this.imageData,
        id: this.$route.params.id,
      });
      
    },
    goBack() {
      if (confirm('수정을 취소하시겠습니까?')) {
        alert('저장되지 않고 이전 화면으로 넘어갑니다.');
        this.$router.go(-1);
      }
    },
  },
  destroyed() {
    this.resetBoard();
  },
};
</script>