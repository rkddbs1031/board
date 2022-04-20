<template>
  <v-container>
    <v-card class="pa-5">
      <v-form ref="form" lazy-validation>
        <v-row>
          <v-col cols="2">
            <v-card-subtitle>제목</v-card-subtitle>
          </v-col>
          <v-col cols="9">
            <v-text-field
              :counter="50"
              name="title"
              required
              v-model="title"
              maxlength="50"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>
        <v-col>
          <Editor 
            :options="editorOptions"
            initialEditType="wysiwyg"
            ref="toastuiEditor"
            height="500px"
          />
        </v-col>
        <v-col class="text-right">
          <v-btn color="primary" class="font-weight-bold body-1 mr-2" @click="submit">작성하기</v-btn>
          <v-btn color="primary" class="font-weight-bold body-1" outlined @click="goBack">뒤로가기</v-btn>
        </v-col>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/vue-editor';

export default {
  name: 'BoardNew',
  components: {
    Editor,
  },
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
  },
  mounted() {
    const instance = this.$refs.toastuiEditor;
    instance.invoke("addHook", "addImageBlobHook", (blob, callback) => {
      (async () => {
        const formData = new FormData();
        formData.append("files", blob);

        const headers = {
          'X-AUTH-TOKEN': this.token,
          "content-type": "multipart/formdata",
        };
        await axios.post(`${process.env.VUE_APP_API_URL}/api/files`, formData, { headers })
          .then((res) => {
            if (res) {
              const data = res.data.data[0].url;
              this.imageSelect = data;
              this.imageData.push(res.data.data[0]);
            }
          })
          .catch((err) =>  console.log(err));

        const imageUrl = this.imageSelect;
        callback(imageUrl, blob.name);
      })();

      return false;
    });
  },
  methods: {
    ...mapActions( 'list', ['postBaord']),
    submit() {
      this.$refs.form.validate();
      this.content = this.$refs.toastuiEditor.invoke("getHTML");
      const { title, content, imageData } = this;
      const body = {
        title,
        content,
        files: this.imageData,
      };

      this.postBaord({ token: this.token, body });
    },
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>