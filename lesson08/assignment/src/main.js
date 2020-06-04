import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Imagesfill from './views/Imagesfill'

import vStylish from 'v-stylish';
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.component('images-fill', Imagesfill);
Vue.use(vStylish);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

