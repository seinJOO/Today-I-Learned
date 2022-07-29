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
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      axios.post();
    },
  },
};
</script>

<style></style>
