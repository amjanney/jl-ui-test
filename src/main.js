/*
 * @Author: your name
 * @Date: 2021-03-15 17:51:21
 * @LastEditTime: 2021-03-16 17:44:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-test-project/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Jlement3 from '../packages';

Vue.config.productionTip = false
Vue.use(Jlement3);
new Vue({
  render: h => h(App),
}).$mount('#app')
