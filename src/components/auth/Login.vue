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
          
          <v-row>
            <v-col>
              <v-btn
                :disabled="!valid"
                block
                class="mr-4"
                submit
                @click="boardLogin"
                >로그인</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                block
                class="mr-4"
                @click="boardRegister"
                >회원가입</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-card>
  </v-col>
</template>

<script>
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
        (v) => !!v || "Password is required",
      ],
    }),
    methods: {
      boardLogin() {
        this.$refs.form.validate();
        if (!this.username) {
          alert("아이디를 입력해주세요.");
        } else if (!this.password) {
          alert("비밀번호를 입력해주세요.");
        } else {
          const authData = {
            username: this.username,
            password: this.password,
          };
          // // 동일한 로직을 vuex action을 통해 구현
          // this.$store.dispatch("LOGIN", authData);
        }
      },
      boardRegister() {
        // this.$router.push({ path: "/board/register" });
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