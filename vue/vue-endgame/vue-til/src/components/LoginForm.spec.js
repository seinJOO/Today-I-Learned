import { shallowMount } from '@vue/test-utils';

import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다', () => {
    const wrapper = shallowMount(LoginForm);
    const idInput = wrapper.find('#username'); // 로그인폼의 id="username" 값 추적
    console.log(idInput); // Wrapper{}
    console.log(idInput.html()); // <input id="username" type="text">
  });
});
