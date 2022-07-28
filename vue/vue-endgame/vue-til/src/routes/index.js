import Vue from 'vue';
import VueRouter from 'vue-router';

// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // 자동 생성되는 url 중간의 #을 제거하기
  // 배포했을 때 Server Configuration에서 url에 대한 우회, 필터링에 대한 기능을 넣어줘야 함
  // (HTML5 History Mode) 설정을 해야만 SPA의 #이 없을때도 서버가 각 url을 인식할 수 있음

  // routes에 의해 컨트롤되는 page component들 - views에 있음
  routes: [
    {
      path: '/',
      redirect: '/login', // 서버에 접속하면 가장 먼저 띄울 페이지로 redirect
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
      // 등록되지 않은 페이지에 대해 반응하는 페이지 설정하기
      path: '*',
      //다른 path에 해당하는 모든 url에 반응하겠다는 의미
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
