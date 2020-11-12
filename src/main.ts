import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import '../src/assets/css/reset.css'
import store from './store'
import shopCart from './components/shopCart.vue'

// 注册全局组件
Vue.component('shopcart',shopCart)
Vue.config.productionTip = false
import 'vant/lib/index.css';
import { Button } from 'vant';
// Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
