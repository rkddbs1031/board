<template>
  <v-col class="d-flex main" >
    <v-card width="800">
      <v-col>
        <v-col>
          <h2 class="font-weight-bold"> Sign Up </h2>
          <h5 class="subtitle-1 d-flex justify-space-between font-weight-normal">
            <span>회원이신가요?</span>
            <span><a href="/auth/login" class>로그인하러 가기</a> </span>
          </h5>
        </v-col>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="mt-4"
        >
          <v-col class="py-0">
            <v-text-field
              v-model="userName"
              :rules="Rules"
              label="아이디"
              required
              outlined
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field
              v-model="fName"
              :rules="Rules"
              label="성"
              required
              outlined
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field
              v-model="lName"
              :rules="Rules"
              label="이름"
              required
              outlined
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field 
              v-model="pw"
              :counter="10"
              :rules="Rules"
              label="비밀번호"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              required
              outlined
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field 
              v-model="email"
              :rules="emailRules"
              label="이메일"
              required
              outlined
            />
          </v-col>
          <v-col>
            <v-btn
              :disabled="!valid"
              block
              color="primary"
              submit
              @click="register"
              >회원가입</v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-card>
  </v-col>
</template>
<script>
import axios from "axios";

export default {
  name: "Register",
  data: () => ({
    valid: true,
    userName: '',
    fName: '',
    lName: '',
    show1: false,
    pw: '',
    Rules: [(v) => !!v || "필수 항목입니다."],
    email: '',
    emailRules: [(v) => !!v || '필수 항목입니다.', (v) => /.+@.+\..+/.test(v) || '유효한 이메일을 작성해 주세요.'],
  }),
  methods: {
    async register() {
      this.$refs.form.validate();
      
      const userData = {
        uername: this.userName,
        password: this.pw,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      
      if (this.$refs.form.validate()) {
        const API = `${process.env.VUE_APP_API_URL}/public/auth/register`;
        await axios.post(API, userData)
          .then(() => {
            alert("회원가입이 완료되었습니다.");
            this.$router.push('/auth/login');
          })
          .catch((err) => {
            console.log(err.response.status);
            alert("다시 시도 해주세요.");
          });
      }
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