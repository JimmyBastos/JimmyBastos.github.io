import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: Routes
})

export default router
