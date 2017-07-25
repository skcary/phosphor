import '../static/css/reset.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: '/static/img/loading.gif',
  attempt: 2
})
router.push('/home/popular')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
