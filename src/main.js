// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import localforage from 'localforage'

import 'bulma/css/bulma.css'

import { App } from './app'
// import AppStyles from './css/app.css'
import router from './router'
import store from './store'

localforage.config({
  name: 'gym'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
