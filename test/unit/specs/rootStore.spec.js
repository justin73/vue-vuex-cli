import { mutations, getters } from '@/store/rootStore'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { describe, it, expect } from 'chai'
import { StringResolver } from './../../../bower_components/hydrolysis/src/loader/string-resolver'
// destructure assign `mutations`
const { fetchHeros, fetchSelectedHero, fetchPlanet, fetchMovieList } = mutations

describe('mutations', () => {
  // beforeEach(() => {

  // })
  it('fetchHeros', () => {
      // mock state
    const state = { heroList: [] }
      // apply mutation
    fetchHeros(state, ['Meng', 'Samya'])
      // assert result
    expect(state.heroList.length).toEqual(2)
  })
  it('fetchSelectedHero', () => {
    // mock state
    const state = { selectedHero: null }
    // apply mutation
    fetchSelectedHero(state, {name: 'Meng', gender: 'male'})
    // assert result
    expect(state.selectedHero.name).toEqual('Meng')
  })
  it('fetchPlanet', () => {
    // mock state
    const state = { planet: '' }
    // apply mutation
    fetchPlanet(state, 'Earth')
    // assert result
    expect(state.planet).toEqual('Earth')
  })
  it('fetchMovieList', () => {
    // mock state
    const state = { movieList: [] }
    // apply mutation
    fetchMovieList(state, ['Movie1', 'Movie2'])
    // assert result
    expect(state.movieList.length).toEqual(2)
  })
})

describe('getters', () => {
  const state = {
    heroList: [
      {name: 'meng', gender: 'male'},
      {name: 'samya', gender: 'female'}
    ],
    planet: 'Earth',
    selectedHero: null,
    movieList: ['movie1', 'movie2']
  }

  it('getHeroList', () => {
    const result = getters.getHeroList(state)
    expect(result).toEqual([
      {name: 'meng', gender: 'male'},
      {name: 'samya', gender: 'female'}
    ])
  })
  it('getSelectedHero', () => {
    const result = getters.getSelectedHero(state)
    expect(result).toEqual(null)
  })
  it('getMovieList', () => {
    const result = getters.getMovieList(state)
    expect(result).toEqual(['movie1', 'movie2'])
  })
  it('getPlanet', () => {
    const result = getters.getPlanet(state)
    expect(result).toEqual('Earth')
  })
})

describe('actions', () => {
  let actions
  let store
})
