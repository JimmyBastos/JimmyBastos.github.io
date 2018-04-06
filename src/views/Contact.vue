
<style lang="sass" scoped>
  @import '../assets/sass/_helpers/_index.sass'
  @import '../assets/sass/_theme/_colors.sass'
  .content

</style>
<template>
    <section class="content text-center">
      <b-container class="has--full-height">
        <!-- TITLE -->
        <h1>Send me a message</h1>
      </b-container>
    </section>
</template>

<script>
import bgWave from '../components/Wave.vue'
export default {
  name: 'contact',
  components: {
    bgWave
  },
  data () {
    return {

    }
  }
}
</script>
