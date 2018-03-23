<template>
  <div class="hello">
    <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Selected Hero</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <p>Name : {{detail.name}} </p>
        <p>Gender: {{detail.gender}}</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'HeroDetail',
  data () {
    return {
      name: ''
    }
  },
  props: {
    detail: Object
  },
  created () {}
}
</script>
