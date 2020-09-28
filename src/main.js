import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '~/icon/iconfont.css'
import '~/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
