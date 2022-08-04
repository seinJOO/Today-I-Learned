import Vue from 'vue';
import LoginForm from './LoginForm.vue';
// 컴포넌트 테스트
// 테스트 단위를 LoginForm.vue로 grouping
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    /*
    new Vue({
      // el: '@app', // instance가 생성될 때 element를 지정하는 방법 - X
      render: h => h(App); }).$mount(); // instance가 생성된 후 mount 될 포인트를 지정해주는 방법
      */
    const instance = new Vue(LoginForm).$mount();
    console.log(instance.username); // jest에서는 콘솔을 터미널에서 편하게 확인할 수 있음
    expect(instance.username).toBe(''); // username이 초기값(빈 문자열)이 맞는지 확인
  });
});
