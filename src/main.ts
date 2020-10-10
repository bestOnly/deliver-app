import Vue from 'vue'
import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

import { Button } from 'vant';

Vue.use(Button);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
