import { shallowMount } from '@vue/test-utils';

import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // 이메일 유효성을 만족하지 않았을 때 나타나는 p태그가 존재하는지 확인
    // p태그에 적용되는 클래스 warning을 사용
    const warningText = wrapper.find('.warning');
    console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });
});
