import Vue from 'vue'
import App from './App.vue'
import { AndroidFullScreen } from '@ionic-native/android-full-screen/index';
AndroidFullScreen.immersiveMode()
import './directives/backgroudColor'
import './directives/scroll'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
