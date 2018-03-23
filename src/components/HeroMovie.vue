<template>
  <div>
    <!-- <ul v-for="item in movieList" :key="item.title">
      <li>{{item.title}}</li>
      <img v-bind:src="'https://prod.gap.ubisoft.org/api/v1/asset/archive/varsity/widget/swapi-character-films/film' + item.episode_id + '.jpg'">
    </ul> -->

    <md-card v-for="item in movieList" :key="item.title" class="md-primary" md-theme="black-card">
      <img v-bind:src="'https://prod.gap.ubisoft.org/api/v1/asset/archive/varsity/widget/swapi-character-films/film' + item.episode_id + '.jpg'">
      <md-card-media-cover md-solid>
        <md-card-area>
          <md-card-header>
            <span class="md-title">{{item.title}}</span>
            <span class="md-subhead">{{item.release_date}}</span>
          </md-card-header>

        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import store from './../store/rootStore'
import { mapState } from 'vuex'

export default {
  name: 'HeroMovieList',
  computed: mapState({
    movieList: () => store.getters.getMovieList
  }),
  beforeMount () {
    // console.log('-->', this.$els.card)
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
