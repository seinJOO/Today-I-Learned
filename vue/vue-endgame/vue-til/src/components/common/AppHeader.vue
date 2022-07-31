<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <!-- 분기처리 1 : 로그인이 되었을 때 표출 -->
      <!-- <template v-if="$store.getters.isLogin">  
            1) store의 getters에서 직접 가져오기-->
      <template v-if="isUserLogin">
        <!-- 2) computed를 통해 가져와서 코드를 더 간결하게 만들기 -->
        <span class="username">{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">Logout</a>
        <!-- href="javascript:;" >> 앵커태그의 본래 기능을 막음 -->
      </template>
      <!-- 분기처리 2 : 로그인이 되지 않았을 때 표출 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin; // this.를 통해 getters에 접근
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername'); // 인자값이 필요없는 함수임
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
