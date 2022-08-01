// 학습 노트 조작과 관련된 CRUD API 함수 파일

import { posts } from './index';
// const posts = createInstanceWithAuth('posts');

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return posts.get('/');
  // get('posts') => get('/')
  // baseURL: `${process.env.VUE_APP_API_URL}${url}` 으로 baseURL에 posts를 포함함
}

// 학습노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };
