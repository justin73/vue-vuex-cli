<template>
  <div class="hello">
    {{detail}}
  </div>
</template>

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
