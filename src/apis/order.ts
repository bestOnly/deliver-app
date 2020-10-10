import RequestImpl from './request';
import { Method } from 'axios'

// 定义规则
type OrderReqInfo = {
    url: string;
    options?: {
      method: Method;
    };
}

// 发请求
class OrderImpl {
    static getGoodsList(data: OrderReqInfo): any {
        return RequestImpl.send(data.url, data.options)
    }
}
export default OrderImpl;