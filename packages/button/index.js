/*
 * @Author: your name
 * @Date: 2021-03-15 15:01:28
 * @LastEditTime: 2021-03-15 15:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-ui/packages/alert/index.js
 */
import JlButton from './Button.vue';
JlButton.install = function (app) {
  app.component(JlButton.name, JlButton);
}
export default JlButton;
 