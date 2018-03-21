<template>
  <div class="hello">
    <ul v-for="(item, index) in heroList" :key="item.name">
      <li @click="selectedHero(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HeroList',
  data () {
    return {
      heroList: []
    }
  },
  methods: {
    selectedHero (index) {
      this.$emit('clickItem', this.heroList[index])
      this.$store.commit('increment', 10)

      this.$store.dispatch('incrementAsync', {
        amount: 10
      })
    }
  },
  mounted () {
    fetch('https://swapi.co/api/people').then(res => res.json()).then(data => {
      console.log('====================================')
      console.log(data)
      console.log('====================================')
      this.heroList = data.results
    })
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
