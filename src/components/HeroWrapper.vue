<template>
  <div class="wrapper">
    <h1>Star Wars</h1>
    <HeroList class="heroList"/> <!--@clickItem="displayDetail"-->
    <HeroDetail /> <!--:detail="heroObj"-->
    <HeroMovieList />
  </div>
</template>

<script>
import HeroList from './HeroList.vue'
import HeroDetail from './HeroDetail.vue'
import HeroMovieList from './HeroMovie.vue'
import HeroPlanet from './HeroPlanet.vue'
import { mapActions } from 'vuex'

export default {
  name: 'HeroWrapper',
  components: {
    HeroList,
    HeroDetail,
    HeroMovieList,
    HeroPlanet
  },
  methods: {
    ...mapActions([
      'fetchHeroList'
    ])
  },
  created () {
    // this.$store.dispatch('fetchHeroList')
    this.fetchHeroList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #app {
    font-family: 'Roboto';
  }
</style>
