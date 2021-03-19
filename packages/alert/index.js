/*
 * @Author: your name
 * @Date: 2021-03-15 15:01:28
 * @LastEditTime: 2021-03-15 15:05:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-ui/packages/alert/index.js
 */
import JlAlert from './Alert.vue';
JlAlert.install = function (app) {
  app.component(JlAlert.name, JlAlert);
}
export default JlAlert;
 