import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수 - instance 생성을 모듈화 (for 간결한 코드)
function createInstance() {
  const instance = axios.create({
    // get, post 등 axios의 instance를 실행하게 될 때 아래 정의된 속성들을 따르게 됨
    baseURL: process.env.VUE_APP_API_URL,
  });

  // 앞에서 instance(=axios.create)에 대해 공통설정을 한 뒤 인터셉터에 넘겨줌
  return setInterceptors(instance);
}

const instance = createInstance(); // 공통설정 및 인터셉터 설정 완료한 instance를 생성

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts'); // swagger UI의 조회API url
}

export { registerUser, loginUser, fetchPosts };
