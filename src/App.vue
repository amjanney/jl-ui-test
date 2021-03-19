<!--
 * @Author: your name
 * @Date: 2021-03-15 17:51:21
 * @LastEditTime: 2021-03-16 10:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-test-project/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <JlAlert title="this is props alert"/>
    <JlButton btnText="click me"></JlButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import JlButton from '../packages/button';
export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
