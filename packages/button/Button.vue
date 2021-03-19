<!--
 * @Author: your name
 * @Date: 2021-03-15 15:01:53
 * @LastEditTime: 2021-03-16 10:35:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-ui/packages/alert/Alert.vue
-->
<template>
  <div>
    <button>{{btnText}}</button>
  </div>
</template>

<script>
  export default {
    name: 'JlButton',
    props: {
      btnText: {
        type: String,
        default: 'btn'
      }
    }
  }
</script>

<style scoped>

</style>