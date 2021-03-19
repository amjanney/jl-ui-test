<!--
 * @Author: your name
 * @Date: 2021-03-15 15:01:53
 * @LastEditTime: 2021-03-16 10:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-ui/packages/alert/Alert.vue
-->
<template>
  <div>
    <p>{{title}}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'JlAlert',
    props: {
      title: {
        type: String,
        default: 'this is alert'
      }
    },
    data() {
      return {
        message: 'alert'
      }
    }
  }
</script>

<style scoped>

</style>