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
      <button type="submit">login</button>
      <!-- 버튼을 누르면 submit 이벤트가 이벤트 버블링에 의해 form으로 올라오게 되면서
            form에서는 v-on:submit을 통해 디렉티브 이벤트를 받아 submitForm을 실행함 -->
    </form>
  </div>
</template>

<script>
export default {
  /////////////// 마크업에 필요한 속성들 연결하기 ///////////////
  data() {
    // 폼태 그의 각 데이터에 연결할 데이터 속성 지정 + 연결
    // => 마크업의 v-model에 바인딩된 동일한 이름의 값이 변경될 경우 vue에서 감지할 수 있음
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
    },
  },
};
</script>

<style></style>
