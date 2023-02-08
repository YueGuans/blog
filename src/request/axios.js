import axios from "axios";

const baseURL = '/api'
class Http {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  getInstance() {
    const config = {
      baseURL: this.baseURL,
      timeout: 5000,
      headers: {}
    }
    return config
  }


  interceptors(instance) {
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log("处理响应");
      return config;
    }, function (error) {
      // 对请求错误做些什么
      console.log(error);
      return Promise.reject(error);
    });
  
  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      const { data } = response
      console.log(response);
      return data;
    }, function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  
  }
// 添加请求拦截器

request(options) {
  const instance = axios.create();
  const option = {...this.getInstance(), ...options}
  this.interceptors(instance)
  return instance(option)
}

}

  export default new Http(baseURL)

