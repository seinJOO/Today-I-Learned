import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

// router 변수에 담아주기
const router = new VueRouter({
  mode: 'history', // 해시값(#) 관련 설정
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// 콜백 인자 - to : 이동하려는 페이지 / from : 현재 페이지 / next : 페이지 이동 API 호출
router.beforeEach((to, from, next) => {
  console.log(to);
  next(); // next()를 호출해야만 다음 페이지로 이동할 수 있음 ***
});

export default router;
