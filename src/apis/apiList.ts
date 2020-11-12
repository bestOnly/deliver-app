// url集合
import { OrderReqInfo } from './order'
export const seller: OrderReqInfo = {
  url: 'shop/seller',
  options: { method: 'get' }
}
export const goods: OrderReqInfo = {
  url: 'goods/goods_list',
  options: { method: 'get' }
}


// export default {
//   order: {
//     url: 'posts',
//     option: { method: 'get' }
//   },
//   goods: {
//     url: 'goods/goods_list',
//     option: { method: 'get' }
//   },
//   mechant: {
//     url: '',
//     option: { method: 'get' }
//   },
// }