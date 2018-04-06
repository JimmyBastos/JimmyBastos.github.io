<style lang="sass" scoped>
@import '../assets/sass/_helpers/_index.sass'
@import '../assets/sass/_theme/_colors.sass'

.next
  display: block
  width: px-to-rem(24)
  &.light, &.dark
    span
      border-right: 1px solid
      border-bottom: 1px solid
  &.light span
    border-color: $light
  &.dark span
    border-color: $dark

  span
    display: block
    position: relative
    left: 50%
    height: px-to-rem(16)
    width: px-to-rem(16)
    margin-left:px-to-rem(-12)
    transform: rotate(45deg)
    animation: next 1.5s infinite

@keyframes next
  0%
    transform: rotate(45deg) translate(0, 0)
    opacity: 0
  50%
    opacity: 1
  100%
    transform: rotate(45deg) translate(px-to-rem(16),px-to-rem(16))
    opacity: 0

</style>
<template>
  <b-btn variant="link" :class="variant" class="next mx-auto" :href="href" v-smooth-scroll>
    <span></span>
    <span></span>
  </b-btn>
</template>

<script>
export default {
  name: 'btn-next',
  props: ['href', 'variant']
}
</script>
