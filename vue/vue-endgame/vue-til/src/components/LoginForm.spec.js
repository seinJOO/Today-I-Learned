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

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          // 테스트를 할 때는 원하는 결과의 반대값도 꼭 넣어서 테스트하기
          username: 'a@a.com',
          password: '1234',
        };
      },
    });
    //wrapper.find('button') // 버튼이 하나밖에 없어서 이렇게 속성으로 검색도 가능
    const btn = wrapper.find('.btn');
    // expect(btn.element.disabled).toBeTruthy(); // True일 것이라고 에측
    expect(btn.element.value).toBeFalsy(); // False일 것이라고 에측
  });
});
