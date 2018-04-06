<style lang="sass" scoped>
  .top,.bottom
    display: block
    width: 100%
    height: auto
    position: relative
  .top
    top: 0
  .bottom
    bottom: 0
</style>
<template>
  <b-img :src="wave.src" :class="position"/>
</template>

<script>
export default {
  name: 'bg-wave',
  props: ['position'],
  data () {
    return {
      wave: { src: require(`../assets/img/homepage-${this.position}-bg.png`) }
    }
  }
}
</script>
