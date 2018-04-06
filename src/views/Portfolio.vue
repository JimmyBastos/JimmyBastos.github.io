
<style lang="sass" scoped>
  @import '../assets/sass/_helpers/_index.sass'
  @import '../assets/sass/_theme/_colors.sass'
  .content
    position: relative
</style>

<template>
    <section class="content text-light bg-secondary">
      <bg-wave position="top"/>
      <h1 class="main-title text-center">My Latest Works</h1>
      <b-container class="">
        <b-card-group class="text-center mb-5">
          <b-card v-for="work in works" :key="work.index"
            :title="work.title"
            :img-src="work.image.src"
            :img-alt="work.image.alt"
            img-top>

            <p class="card-text">
              {{ work.desc }}
            </p>
          </b-card>
        </b-card-group>
      </b-container>
      <bg-wave position="bottom"/>
    </section>
</template>

<script>
import bgWave from '../components/Wave.vue'
export default {
  name: 'portfolio',
  components: {
    bgWave
  },
  data () {
    return {

    }
  }
}
</script>
