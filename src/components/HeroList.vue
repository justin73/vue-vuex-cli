<template>
  <div>
    <v-select class="selectHero"
        @input="selectedHero"
        :options="heroList"
        label="name"
      ></v-select>
  </div>
</template>

<script>
import store from './../store/rootStore'
import { mapState } from 'vuex'

// import { mapActions } from 'vuex'
export default {
  name: 'HeroList',

  computed: mapState({
    heroList: () => store.getters.getHeroList
  }),

  methods: {
    selectedHero (hero) {
      this.$store.dispatch('fetchHeroDetails', hero)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
