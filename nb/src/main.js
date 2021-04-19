import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('token');
  if (isLogin) {
    next();
  } else {
    if (to.path === '/') {
      next();
    } else {
      next('/');
    }
  }
})


