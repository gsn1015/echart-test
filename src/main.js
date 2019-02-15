// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import echarts from 'echarts'
import App from './App'
import router from './router';
import Veline from 'v-charts/lib/line';
import 'v-charts/lib/style.css';


Vue.component(Veline.name, Veline)
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App, Veline },
//   template: '<App/>'
// })


new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
