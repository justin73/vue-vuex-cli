import Vuex from 'vuex'
import Vue from 'vue'
const fetch = require('isomorphic-fetch')

Vue.use(Vuex)
const state = {
  movieList: [],
  heroList: [],
  selectedHero: null,
  planet: ''
}

export const mutations = {
  fetchHeros (state, payload) {
    state.heroList = payload
  },
  fetchSelectedHero (state, hero) {
    state.selectedHero = hero
  },
  fetchMovieList (state, movieList) {
    state.movieList = movieList
  },
  fetchPlanet (state, planet) {
    state.planet = planet
  }
}

export const actions = {
  fetchHeroList ({ commit }) {
    fetch('https://swapi.co/api/people').then(res => res.json()).then(data => commit('fetchHeros', data.results))
  },
  fetchHeroDetails ({ commit, state }, hero) {
    // frist get selected hero
    commit('fetchSelectedHero', hero)
    // fetch movies starring with this hero
    let movieList = []
    state.selectedHero.films.map(item =>
      fetch(item)
        .then(res => res.json())
        .then(data => movieList.push(data))
    )

    commit('fetchMovieList', movieList)

    // fetch planet where the hero is from
    fetch(state.selectedHero.homeworld)
      .then(res => res.json())
      .then(data => commit('fetchPlanet', data))
  }
}

export const getters = {
  getHeroList: state => state.heroList,
  getSelectedHero: state => state.selectedHero,
  getMovieList: state => state.movieList,
  getPlanet: state => state.planet
}

const store = new Vuex.Store({
  state,
  // sync use store.commit
  mutations,
  // async use store.dispatch
  actions,
  getters
})

export default store
