<style lang="sass" scoped>
#app
  height: 100%
  width: 100%

</style>

<template>
  <div id="app">
    <nav-bar></nav-bar>
    <home id="home"></home>
    <services id="services"></services>
    <skills id="skills"></skills>
    <portfolio id="portfolio"></portfolio>
    <!-- <cases id="cases"></cases> -->
    <contact id="contact"></contact>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

import Home from '@/views/Home'
import Services from '@/views/Services'
import Skills from '@/views/Skills'
import Portfolio from '@/views/Portfolio'
import Cases from '@/views/Cases'
import Contact from '@/views/Contact'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    Home,
    Services,
    Skills,
    Portfolio,
    Cases,
    Contact
  }
}
</script>
