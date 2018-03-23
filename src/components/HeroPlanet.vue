<template>
  <div>
      <p>From: {{planet.name}}</p>
  </div>
</template>

<script>
import store from './../store/rootStore'
import { mapState } from 'vuex'

export default {
  name: 'HeroPlanet',
  computed: mapState({
    planet: () => store.getters.getPlanet
  })
}
</script>
