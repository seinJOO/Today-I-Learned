<template>
  <form v-on:submit.prevent="submitForm"> <!-- 버튼을 눌렀을 때 submit 이벤트가 발생하면 default동작 대신 submitForm 메서드 실행-->
    <div>
      <!-- lable for:"lable이 바라보는 태그" 로 input태그와 연결해줌 -->
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username"> <!-- 값이 입력될 때마다 data의 username 값이 변경됨 -->
    </div>
    <div>
      <label for="password">pw: </label>      
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios'; // HTTP 프로토콜을 이용한 통신 라이브러리

export default {
  data: function() {  // data가 노출되지 않도록 function 사용
    return {
      username: '',
      password: '',

    }
  },
  methods: {
    submitForm: function() {
      // event.preventDefault(); : form의 submit의 default 동작은 데이터를 전송하고 새로고침하는데, 그걸 막기 위해 이벤트 발생 시 default동작을 무효화하는 기본 js 함수
      console.log(this.username, this.password)
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>  