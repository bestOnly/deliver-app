import Axios from 'axios';

// 创建axios实例(复用)
const axios = Axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 5000
})

// 用promise封装请求
class RequestImpl {
	static send(url: string, options: any): Promise<any> {
		return new Promise(function (resolve, reject) {
			axios({ url, ...options }).then(resolve).catch(reject)
		})
	}
}
export default RequestImpl;
