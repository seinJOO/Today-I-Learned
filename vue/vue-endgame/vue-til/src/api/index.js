import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // axios 인스턴스로 공통 설정을 담기
});

function registerUser(userData) {
  return instance.post('signup', userData);

  // const url = 'http://localhost:3000/signup';
  //return axios.post(url, userData);
  //   (method) Axios.post (url: string, data?: any, config?: AxiosRequestConfig<any>)
  //    post()의 result는 Promise<AxiosResponse<any, any>>
}

export { registerUser };
// 여기서 export된 registerUser를 signupForm에서 호출하여 사용할 수 있게 됨
