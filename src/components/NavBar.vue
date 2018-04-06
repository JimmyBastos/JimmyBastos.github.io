<style lang="sass" scoped>
@import '../assets/sass/_helpers/_index.sass'
@import '../assets/sass/_theme/_colors.sass'

.navbar-toggler
  border: none
.navbar
  transition: .5s
  &-brand
    right: 0
    top: 0
    img
      transition: .5s
      width: px-to-rem(56)
  &-collapse.show
    transition: .325s
    background-color: $secondary

  &.scrolled
    padding-top: 0
    padding-bottom: 0
    background-color: $secondary
    .navbar-brand img
      width: px-to-rem(40)
</style>

<template>
  <header>
    <b-navbar toggleable="md" type="dark" :class="{'scrolled': scrolled}"  fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#home">
        <b-img :src="img.brand" alt="Jimmy Bastos Brand" />
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="mx-auto">
          <li class="nav-item mx-2" v-for="route in routes" :key="route.index" v-b-tooltip.hover="route.name" v-if="route.name && route.path">
            <a class="nav-link" :href="route.path" v-smooth-scroll>{{route.name}}</a>
          </li>

          <b-nav-item-dropdown class="mx-2" text="Lang" right>
            <b-dropdown-item href="#">PT</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </header>
</template>

<script>

export default {
  name: 'nav-bar',
  data: function () {
    return {
      scrolled: false,
      routes: [
        { path: '#home', name: 'About' },
        { path: '#services', name: 'Services' },
        { path: '#skills', name: 'Skills' },
        { path: '#portfolio', name: 'Portfolio' },
        { path: '#cases', name: 'Cases' },
        { path: '#blog', name: 'Blog' },
        { path: '#contact', name: 'Contact' }
      ],
      img: {
        brand: require('../assets/img/logo-02.svg')
      }
    }
  },
  methods: {
    updateScroll () {
      this.scrolled = window.scrollY > 25
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeMestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>
