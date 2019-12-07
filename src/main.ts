import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import TableContent from './components/TableContent.vue';
import ButtonContent from './components/ButtonContent.vue';


Vue.component('TableContent', TableContent)
Vue.component('ButtonContent', ButtonContent)



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
