// import css styles
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/style.sass'

import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import App from './App'
// import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
