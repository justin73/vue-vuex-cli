import Vue from 'vue'
import HeroWrapper from '@/components/HeroWrapper'

describe('HeroWrapper.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HeroWrapper)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.wrapper h1').textContent)
      .toEqual('Star Wars')
  })
})
