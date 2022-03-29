import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.interceptors.request.use(config => {
  if(!config.headers) {
    config.headers = {}
  }
  const jwt = localStorage.getItem('jwt');
  if(jwt) {
    config.headers.Authorization = 'Bearer ' + jwt
  }
  return config
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

