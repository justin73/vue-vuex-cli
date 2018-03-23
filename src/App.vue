<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueSelect from 'vue-select'

Vue.component('v-select', VueSelect)

@Component({
  props: {
    msg: {
      default: 'from app.vue'
    }
  }
})
export default class App extends Vue {
  message = 'Hello from Class'
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
