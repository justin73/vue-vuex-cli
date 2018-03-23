<template>
  <div id="app">
    <p>{{msg}}</p>
    <p>{{message}}</p>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Component from 'vue-class-component'

// @Component({
//   props: {
//     msg: {
//       default: 'from app.vue'
//     }
//   }
// })
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
