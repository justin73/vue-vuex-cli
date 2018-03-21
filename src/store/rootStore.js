import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    movieList: []
  },
  mutations: {
    increment: state => state.count++
  },
  getters: {
    getMovieList: state => state.movieList
  },
  // async
  actions: {
    incrementAsync: context => context.commit('increment')
  }
})
