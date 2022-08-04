import { shallowMount } from '@vue/test-utils';

import LoginForm from './LoginForm.vue';

// 실제 브라우저에서 확인하지 않아도 원하는 값이나 기능들이 동작하는지 확인하기

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
    console.log('인풋 박스의 값', idInput.element.value); // test
    // LoginForm의 이메일 유효성을 검증하는 computed 메서드를 끌어와 조건에 만족하는지 확인
    console.log(wrapper.vm.isUsernameValid); // false
  });
});
