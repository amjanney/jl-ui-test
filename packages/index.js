/*
 * @Author: your name
 * @Date: 2021-03-15 15:08:09
 * @LastEditTime: 2021-03-15 18:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-ui/src/index.js
 */
import JlAlert from './alert';
import JlButton from './button';

const components = [
  JlAlert,
  JlButton
];

const install = function(Vue) {
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

const Jlement3 = {
  install
}

export {
  JlAlert,
  JlButton
};

export default Jlement3;