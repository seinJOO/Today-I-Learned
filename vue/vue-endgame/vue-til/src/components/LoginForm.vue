<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button :disabled="!isUsernameValid || !password" type="submit" class="btn">
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
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
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        // dispatch : actions를 호출하는 함수
        await this.$store.dispatch('LOGIN', userData);
        // await를 하지 않으면 토큰을 받아서 store에 저장하기 전에 main에 진입되기 때문에 순서처리 오류로 인해 에러남.
        // return data기 때문에 const data = 에 넣어줘도 됨 (사용하려면)

        /* const { data } = await loginUser(userData);
           this.$store.commit('setToken', data.token);
           this.$store.commit('setUsername', data.user.username);
           console.log(data.user.username);
           saveAuthToCookie(data.token); /
           saveUserToCookie(data.user.username); */

        this.$router.push('/main');
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
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

<style>
.btn {
  color: white;
}
</style>
