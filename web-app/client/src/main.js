import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/plugins/echarts";

Vue.config.productionTip = false
// 

export const EventBus = new Vue(); 

new Vue({
  render: function (h) { return h(App) },
  router,
}).$mount('#app')

