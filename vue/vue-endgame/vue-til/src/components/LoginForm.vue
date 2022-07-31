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
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        //const response = await loginUser(userData);
        //console.log(response);
        // 콘솔에 출력 시 response는 정해진 형식으로 수신됨

        // data 부분에 우리가 원하는 정보가 있음 => response의 data를 바로 꺼내기 {data}
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username}님 환영합니다`;
      } catch (error) {
        // 에러 핸들링할 코드
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
