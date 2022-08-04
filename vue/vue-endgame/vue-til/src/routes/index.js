import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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
      // 임의로 정의한 속성 auth를 설정 - auth가 false이면 로그인 페이지로 이동하도록 구현
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// 콜백 인자 - to : 이동하려는 페이지 / from : 현재 페이지 / next : 페이지 이동 API 호출
router.beforeEach((to, from, next) => {
  // store의 index.js에 로그인 여부 확인 가능
  // getters: {isLogin(state) {return state.username !== '';},},
  if (to.meta.auth && !store.getters.isLogin) {
    // to의 meta속성을 이용해 임의로 인증 설정해보기
    console.log('인증이 필요합니다');
    next('/login'); // 로그인 상태가 아닌 경우 로그인 페이지로 이동
    return; // => if를 사용했기 때문에 페이지를 이동했을 경우 아래의 next()가 또 호출되지 않도록 return;처리
  }
  console.log(to); // to를 콘솔에 찍어보면 meta 속성이 있음
  next(); // next()를 호출해야만 다음 페이지로 이동할 수 있음
});

export default router;
