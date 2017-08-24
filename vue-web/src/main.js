// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'    // 引入element-ui
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(ElementUI)  // 全局注册element-ui
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',   // 使用注册的组件app
  components: { App }   // 注册的组件app
})
