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
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
