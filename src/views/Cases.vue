<style lang="sass" scoped>
  @import '../assets/sass/_helpers/_index.sass'
  @import '../assets/sass/_theme/_colors.sass'
</style>
<template>
    <section class="content">
      <b-container>
        <!-- TITLE -->
        <h1>Cases</h1>
      </b-container>
    </section>
</template>

<script>
export default {
  name: 'cases',
  data () {
    return {
      img: {
        brand: require('../assets/img/logo-01.svg')
      }
    }
  }
}
</script>
