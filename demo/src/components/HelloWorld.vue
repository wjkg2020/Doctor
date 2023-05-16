<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>{{title}}</h1>
    <el-button type="primary" >{{message}}</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'cjw-demo',
      message: '测试按钮'
    }
  }
}
</script>
