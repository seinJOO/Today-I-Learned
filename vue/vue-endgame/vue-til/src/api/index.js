import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData); // 로그인 api 구현
}

export { registerUser, loginUser }; // 꼭 export 해줘야함
