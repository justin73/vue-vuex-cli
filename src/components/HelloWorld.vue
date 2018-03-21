<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <HeroList @clickItem="displayDetail"/>
    <HeroDetail :detail="heroObj"/>
  </div>
</template>

<script>
import HeroList from './HeroList.vue'
import HeroDetail from './HeroDetail.vue'
export default {
  name: 'HelloWorld',
  components: {
    HeroList,
    HeroDetail
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      heroObj: null
    }
  },
  methods: {
    displayDetail (obj) {
      console.log(obj)
      this.heroObj = obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
