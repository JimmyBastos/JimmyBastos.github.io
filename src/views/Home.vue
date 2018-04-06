<style lang="sass" scoped>
  @import '../assets/sass/_helpers/_index.sass'
  @import '../assets/sass/_theme/_colors.sass'
  .about
    padding-top: px-to-rem(90)
    background-size: cover
    background-attachment: fixed
    background-color: $secondary
    background-image: linear-gradient(rgba($secondary, .875),rgba($secondary,1)), url('../assets/img/background-02.jpg')

    img.profile
      filter: grayscale(100%)
      width: px-to-rem(120)

    img.profile, .title, .description
      margin-bottom: 2.725rem

</style>
<template>
    <section class="about">
      <div class="d-table has--full-size">
        <div class="d-table-cell align-middle has--full-size text-center text-light">
          <b-container class="mx-auto">
            <b-img class="profile" rounded="circle" :title="about.img.profile.title" :src="about.img.profile.src" :alt="about.img.profile.alt" />
            <!-- TITLE -->
            <h1 class="title">
              {{ about.title }}
            </h1>
            <span class="line bg-primary mx-auto"></span>
            <!-- ABOUT ME -->
            <p class="description mx-auto col-md-8 col-lg-6" >
              {{ about.desc }}
            </p>

            <div class="buttons">
              <b-btn variant="primary" size="" class="mx-auto" href="#contact" v-smooth-scroll> Contact me</b-btn>
              <btn-next href="/#services" variant="light"/>
            </div>
          </b-container>
        </div>
      </div>
      <bg-wave position="bottom"/>
    </section>
</template>

<script>
import bgWave from '../components/Wave.vue'
import btnNext from '../components/ButtonNext.vue'
export default {
  name: 'home',
  components: {
    bgWave,
    btnNext
  },
  data () {
    return {
      about: {
        title: "Hello, I'm Jimmy",
        desc: 'I am a 20-year-old fullstack developer who loves Front-end design and is passionate about JavaScript and Node.js.',
        img: {
          profile: {
            src: 'https://avatars2.githubusercontent.com/u/17859531?s=460&v=4',
            title: 'Hey, This is me!',
            alt: 'Jimmy Bastos Photo'
          }
        }
      }
    }
  }
}
</script>
