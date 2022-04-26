<template>
  <v-col class="d-flex main" >
    <v-card width="800">
      <v-col>
        <v-col>
          <h2 class="font-weight-bold"> Login </h2>
          <h5 class="subtitle-1 d-flex justify-space-between font-weight-normal">
            <span>아이디가 없으신가요?</span>
            <span><a href="/auth/register" class>회원가입하러 가기</a> </span>
          </h5>
        </v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          action="/"
          class="mt-4"
        >
          <v-col class="py-0">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Id"
              required
              outlined
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
              outlined
              :type="show1 ? 'text' : 'password'"
            />
          </v-col>
          <v-col>
            <v-btn
              :disabled="!valid"
              block
              color="primary"
              submit
              @click="login"
              >로그인</v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from "axios";

export default {
  name: "BoardLogin",
  data: () => ({
    valid: true,
    username: "",
    usernameRules: [
      (v) => !!v || "필수 항목입니다.",
    ],
    show1: false,
    password: "",
    passwordRules: [
      (v) => !!v || "필수 항목입니다.ㄴㄴㄴㄴ",
    ],
  }),
  computed: {
    ...mapState( 'user', ['token']),
  },
  watch: {
    token() {
      this.$router.push('/board/list');
    },
  },
  methods: {
    ...mapActions( 'user', ['userLogin']),
    async login() {
      this.$refs.form.validate();
      await this.userLogin({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .main .v-card {
    margin: 0 auto !important;
  }
</style>