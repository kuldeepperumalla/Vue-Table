import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
