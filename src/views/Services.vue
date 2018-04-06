
<style lang="sass" scoped>
@import '../assets/sass/_helpers/_index.sass'
@import '../assets/sass/_theme/_colors.sass'
.content
  position: relative
  &::before
    position: absolute
    width: 100%
.card-img-top
  width: px-to-rem(64)
  margin: 0 auto
  margin-top: px-to-rem(36)
</style>
<template>
    <section class="content">
      <h1 class="main-title text-center">What I do</h1>
      <b-container class="">
        <b-card-group class="text-center mb-5">
          <b-card v-for="service in services" :key="service.index"
            :title="service.title"
            :img-src="service.icon.src"
            :img-alt="service.icon.alt"
            img-top>

            <hr class="col-1">
            <p class="card-text">
              {{ service.desc }}
            </p>
            <hr class="col-1">
          </b-card>
        </b-card-group>
      </b-container>
    </section>
</template>

<script>
export default {
  name: 'services',
  data () {
    return {
      services: [
        {
          title: 'Software Design',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis exercitationem veniam at deserunt.',
          icon: {
            src: require('../assets/img/icons/design-tool.svg'),
            alt: 'Design Icon'
          }
        },
        {
          title: 'Front-end',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis exercitationem veniam at deserunt.',
          icon: {
            src: require('../assets/img/icons/vector.svg'),
            alt: 'Front-end Icon'
          }
        },
        {
          title: 'Back-end',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis exercitationem veniam at deserunt.',
          icon: {
            src: require('../assets/img/icons/code.svg'),
            alt: 'Code Icon'
          }
        }
      ]
    }
  }
}
</script>
