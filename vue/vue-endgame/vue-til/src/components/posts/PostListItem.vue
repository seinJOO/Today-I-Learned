<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <ion-icon class="icon" name="pencil"></ion-icon>
      <ion-icon class="icon" name="trash" @click="deleteItem"></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      //상위컴포넌트인 MainPage.vue에서 <PostListItem>태그로 postItem을 props로 제공
      type: Object,
      required: true,
    },
  },
  methods: {
    // 삭제를 위해 필요한 파라미터를 swagger UI에서 확인하기 (_id)
    async deleteItem() {
      // 삭제 버튼을 누를 때 간단히 확인하기 - confirm은 true/false로 리턴
      if (confirm('You want to delete it?')) {
        // props로 넘어온 데이터기 때문에 this로 접근
        // + fetchPosts()의 response.posts => postItems => postItem에 id값이 "_id"로 들어가있음
        await deletePost(this.postItem._id);
        // 데이터를 삭제한 후 refresh 이벤트 올리기
        // this.$emit() : 자식 컴포넌트에서 부모 컴포넌트로 이벤트/데이터 전달
        this.$emit('refresh');
      }
    },
  },
};
</script>

<style></style>
