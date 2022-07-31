<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"> ID </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password"> PW </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      <!-- v-bind:disabled="함수" => 함수가 false일 때 disabled는 true-->
      <!-- !password : v-model="password"에 데이터가 없을 경우 false -->
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    //props든, data든, store든 데이터의 변화에 따라서 내용을 자동으로 계산해주는 연산식!
    isUsernameValid() {
      // boolean을 반환해올것이기 때문에 is~~()
      return validateEmail(this.username);
      // username의 데이터가 한글자한글자 바뀔때마다 validateEmail()이 실행될 것
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username}님 환영합니다`;
      } catch (error) {
        console.log(error); //=> try-catch를 통해 어떤 부분에서 에러가 났는지 콘솔에서 확인 가능
        console.log(error.response); // 에러에 대한 response를 볼 수 있음.
        console.log(error.response.data); // response의 data부분만 출력 - Authentication failed. Wrong password.
        this.logMessage = error.response.data; // data의 에러 메세지를 화면/모달 등에 표출 가능
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
