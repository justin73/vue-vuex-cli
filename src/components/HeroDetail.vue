<template>
  <div>
    <!-- {{detail}} -->
    <md-card v-if="detail">
      <md-card-header>
        <div class="md-title">Selected Hero</div>
      </md-card-header>

      <md-card-content>
        <p>Name: {{detail.name}}</p>
        <p>Description: {{detail.gender}} with {{detail.hair_color}} hair
          and {{detail.eye_color}} eye.
        </p>
        <HeroPlanet/>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import store from './../store/rootStore'
import HeroPlanet from './HeroPlanet.vue'
import { mapState } from 'vuex'
export default {
  name: 'HeroDetail',
  components: {
    HeroPlanet
  },
  computed: mapState({
    detail: () => store.getters.getSelectedHero
  })
}
</script>
