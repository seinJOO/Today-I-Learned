<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning isContentTooLong">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>
<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
        // console.log(data);
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  // 페이지를 끌어오자마자 개별 노트 데이터 조회
  async created() {
    // Vue 개발자도구에서 PostEditPage(수정화면)으로 이동했을 때
    // route - $route에서 params를 확인 가능
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    // data에 정의된 변수들에 조회 데이터 대입하기
    this.title = data.title;
    this.contents = data.contents;
    console.log(data);
  },
};
</script>
<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
