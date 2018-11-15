
import App from './App.vue'
import Vue from 'vue'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

import VueTable from '@lossendae/vue-table'
import '../src/bootstrap.min.css'
//import MButton from 'vue-m-button'
//import 'vue-m-button/dist/css/default.css'
import { Button } from 'bootstrap-vue/es/components';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Button);
Vue.component("vue-table", VueTable);
//Vue.use(MButton)

//Vue.use('vue-table', VueTable)



Vue.use(VueTabs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')