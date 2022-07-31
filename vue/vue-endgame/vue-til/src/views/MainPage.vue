<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <!-- v-for에서 key는 필수 !! -->
        <!-- PostListItem.vue에서 props명을 postItem으로 지정했기 때문에 :postItem = "postItem" (:프롭스명="메인페이지에서의 변수명")
        data.posts로 받은 postItems의 각 데이터를 postItem에 넣어 for문 돌림 -->
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
import { fetchPosts } from '@/api/index';

export default {
  components: {
    PostListItem, // 리스트를 출력하는 컴포넌트 등록
  },
  data() {
    return {
      postItems: [], // 콘솔에 data 출력 결과 posts:[]가 확인되어, 초기화는 []로 진행
    };
  },
  methods: {
    async fetchData() {
      // 학습 노트 데이터 조회 API를 메인페이지와 연결
      const { data } = await fetchPosts(); // axios의 response의 data 바로 꺼내오기
      console.log(data.posts); // 콘솔에 찍었을 때 data.post에 우리가 원하는 값이 있음을 알 수 있음
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
