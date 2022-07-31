<template>
  <li>
    <!-- v-for은 MainPage에서 내려주기 때문에 제외 -->
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">{{ postItem.createdAt }}</div>
  </li>
</template>

<script>
export default {
  props: {
    // 실무에서 props는 타입 등을 자세하게 지정해야함
    postItem: {
      type: Object,
      required: true, // API에 의해 값이 넘어오지 않으면 Validation에 의해 에러 생성
    },
  },
};
</script>

<style></style>
