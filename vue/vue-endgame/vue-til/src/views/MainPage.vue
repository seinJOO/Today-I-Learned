<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem v-for="postItem in postItems" :key="postItem._id" :postItem="postItem">
          <!-- 이 부분이 PostListItem.vue로 컴포넌트화 된 것 !!!!
          <li><div class="post-title">{{ postItem.title }}</div>
            <div class="post-contents">{{ postItem.contents }}</div>
            <div class="post-time">{{ postItem.createdAt }}</div></li> -->
        </PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue'; // 리스트를 출력하는 컴포넌트 가져오기
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'; // 로딩스피너 컴포넌트 가져오기
import { fetchPosts } from '@/api/index';

export default {
  components: {
    PostListItem, // 리스트를 출력하는 컴포넌트 등록
    LoadingSpinner, // 로딩스피너를 컴포넌트로 등록
  },
  data() {
    return {
      postItems: [], // 콘솔에 data 출력 결과 posts:[]가 확인되어, 초기화는 []로 진행
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      // 학습 노트 데이터 조회 API를 메인페이지와 연결
      this.isLoading = true; // 데이터를 가져올 때까지 로딩스피너 표출을 위해 isLoading=true 설정
      const { data } = await fetchPosts(); // axios의 response의 data 바로 꺼내오기
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
