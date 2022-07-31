<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- .prevent : form 제출 후 페이지 이동이나 새로고침을 방지함 -->
      <!-- <form @submit="submitForm"> => 이벤트리스너인 v-on은 심볼 @으로 치환 가능-->
      <div>
        <label for="username"> ID: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password"> PW: </label>
        <input id="password" type="text" v-model="password" />
      </div>
      <div>
        <label for="nickname"> NAME: </label>
        <input id="nickname" type="text" v-model="nickname" />
      </div>
      <button :disabled="!isUsernameValid || !password || !nickname" type="submit">
        회원 가입
      </button>
      <!-- 버튼을 누르면 submit 이벤트가 이벤트 버블링에 의해 form으로 올라오게 되면서
            form에서는 v-on:submit을 통해 디렉티브 이벤트를 받아 submitForm을 실행함 -->
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  /////////////// 마크업에 필요한 속성들 연결하기 ///////////////
  data() {
    // 폼 태그의 각 데이터에 연결할 데이터 속성 지정 + 연결
    // => 마크업의 v-model에 바인딩된 동일한 이름의 값이 변경될 경우 vue에서 감지할 수 있음
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    // async-await으로 비동기 처리 지정해주기
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      //const response = await registerUser(userData);
      // console.log(response.data); // 비동기 처리 결과 콘솔로 받아보기

      const { data } = await registerUser(userData);
      console.log(data.username); // 변수로 바로 꺼내서 볼 수 있음 (es6 destructuring)
      this.logMessage = `${data.username}님이 가입되었습니다`;
      // es6 백틱(`) => `${}` 으로 문자열 안에 바로 자바스크립트 변수값을 가져올 수 있음
      this.initForm(); // 데이터 전송 후 폼에 입력된 데이터 비우기
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = ''; // 자바스크립트는 Type이 없는 언어이기 때문에 null로 설정해도 무관
      // 단, 버그를 줄이기 위해서는 타입을 지정해줘도 좋음
    },
  },
};
</script>

<style></style>
