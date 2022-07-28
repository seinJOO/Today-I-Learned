import axios from 'axios';

function registerUser() {
  const url = 'http://localhost:3000';
  return axios.post(url);
  //   (method) Axios.post (url: string, data?: any, config?: AxiosRequestConfig<any>)
  //    post()의 result는 Promise<AxiosResponse<any, any>>
}

export { registerUser };
// 여기서 export된 registerUser를 signupForm에서 호출하여 사용할 수 있게 됨
