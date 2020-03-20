import axios from 'axios';
import qs from 'qs';  //queryString 可以把一个对象转化成字符串
axios.defaults.baseURL = "http://localhost:9000"; //后端接口的主机和端口号
axios.defaults.withCredentials = true; //跨域的时候时候是否携带cookie 不携带session不生效
//转化请求体
axios.defaults.transformRequest = (data={})=>qs.stringify(data);
//拦截响应体  response headers body data 很多属性 data属性里放的就是对象格式的响应体
axios.interceptors.response.use(result=>result.data); 

export default axios
