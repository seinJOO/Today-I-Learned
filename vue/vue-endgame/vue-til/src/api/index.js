import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// Authorization 필요 여부에 따라 API 분리
// api/index.js 에서는 setup과 관련된 코드만 남게 됨

// 단순히 BASE URL만 생성해주는 기본 instance
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수 - url을 받아 baseURL에 넣어 생성하는 instance
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// GET - /posts
// POST - /posts
// PUT - /posts/{_id}     => 앞의 url이 반복되는 것을 방지하기 위해
// DELETE - /posts/{_id}      crateInstanceWithAuth를 이용 **swagger UI 참고
