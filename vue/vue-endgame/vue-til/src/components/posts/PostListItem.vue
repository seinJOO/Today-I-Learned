<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <!-- 필터 함수 전역필터로 지정 후 : 2022-08-1 07:40 -->
      <!-- Mon Aug 01 2022 07:40:32 GMT+0900 (한국 표준시) -->
      <ion-icon class="icon" name="pencil" @click="routeEditPage"></ion-icon>
      <ion-icon class="icon" name="trash" @click="deleteItem"></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  // filters: {
  //   formateDate(value) {
  //     // 자바스크립트에서 기본적으로 제공하는 Date
  //     return new Date(value);
  //   },
  // },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
