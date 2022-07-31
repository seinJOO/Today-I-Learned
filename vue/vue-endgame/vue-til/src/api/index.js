import axios from 'axios';
import store from '../store';

const instance = axios.create({
  // get, post 등 axios의 instance를 실행하게 될 때 아래 정의된 속성들을 따르게 됨
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    // 헤더의 기본 요소들 정의 가능
    Authorization: store.state.token, // store.state에 저장된 token을 헤더에 넣기
  },
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
