import { shallowMount } from '@vue/test-utils';

import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다', () => {
    // shallowMount(component, options) 의 options : 컴포넌트를 마운팅 할 때의 option
    const wrapper = shallowMount(LoginForm, {
      // 실제로 컴포넌트를 마운팅 할 때 처럼 속성 설정 가능
      data() {
        return {
          username: 'test', // 테스트코드 내에서 로그인폼에 정의된 v-model의 username 값을 바꾸게 됨
        };
      },
    });
    const idInput = wrapper.find('#username'); // 로그인폼의 id="username" 값 추적
    console.log(idInput.element.value); // test
  });
});
