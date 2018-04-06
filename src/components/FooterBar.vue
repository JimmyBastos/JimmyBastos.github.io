<style lang="sass">
@import '../assets/sass/_helpers/_index.sass'
@import '../assets/sass/_theme/_colors.sass'

ul
  list-style: none

.social a
  color: inherit
  img
    width: px-to-rem(48)
</style>

<template>
<footer class="text-center">
  <b-container>
    <section class="social mx-auto mb-5">
      <h1>Stalk Me</h1>
      <ul>
        <li class="mx-5 d-inline-block" v-for="icon in social" :key="icon.index">
          <a class="d-block" :href="icon.link" target="_blank">
            <b-img class="" :src="icon.src" v-b-tooltip.hover :title="icon.title" :alt="icon.alt"/>
          </a>
          <!-- <a class="d-block text-primary" :href="icon.link"><small>{{ icon.title }}</small></a> -->
        </li>
      </ul>
    </section>
    <hr>
    <b-row class="">
      <small class="d-block col-md-6 mx-auto">
        Icons designed by
        <a href="http://www.flaticon.com" target="_blank">Freepik</a>
        and
        <a href="http://icon54.com" target="_blank">Pixel Perfect</a>
        from
        <a href="http://www.flaticon.com" target="_blank">Flaticon</a>
      </small>
      <hr>
      <small class="d-block col-md-6 mx-auto">
        Realized under the <a href="www.dbad-license.org/" target="_blank">Dont Be a Dick Public License</a> |
        Copyright © 2018 <a href="github.com/jimmybastos" target="_blank">Jimmy Bastos</a>
      </small>
    </b-row>
  </b-container>
</footer>
</template>

<script>
export default {
  name: 'footer-bar',
  data: () => ({
    social: [
      {
        link: 'http://github.com/JimmyBastos',
        src: require('../assets/img/social/github.svg'),
        title: '@JimmyBastos',
        alt: 'Github Icon'
      },
      {
        title: '@jimmy__bastos',
        link: 'http://instagram.com/jimmy__bastos/',
        src: require('../assets/img/social/instagram.svg'),
        alt: 'Instagram Icon'
      },
      {
        title: '@jimmybastos',
        link: 'http://www.linkedin.com/in/jimmybastos/',
        src: require('../assets/img/social/linkedin.svg'),
        alt: 'Linkedin Icon'
      },
      {
        title: '@jimmy_bastos',
        link: 'http://t.me/jimmy_bastos',
        src: require('../assets/img/social/telegram.svg'),
        alt: 'Telegram Icon'
      }
    ]
  })
}
</script>
