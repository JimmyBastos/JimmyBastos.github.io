
<style lang="sass" scoped>
@import '../assets/sass/_helpers/_index.sass'
@import '../assets/sass/_theme/_colors.sass'
.main
  position: relative
  &::before
    position: absolute
    width: 100%
.expertise,
.education
  margin-bottom: px-to-rem(30)
  ul
    margin: 0
    padding: 0
    list-style: none
</style>
<template>
    <section class="content">
      <b-container class="mx-auto">
      <h1 class="text-center main-title">Skills</h1>
       <b-row class="">
          <b-col is="section" class="education col-lg-6 mx-auto">
            <h3 class="">Education</h3>
            <ul>
              <li class="my-5" v-for="item in education" :key="item.index">
                <span class="d-block font-weight-normal">{{item.time}}</span>
                <span class="d-block">{{item.institute}}<i> {{item.type}}</i></span>
                <span class="d-block">{{item.desc}}</span>
              </li>
            </ul>
          </b-col>
          <b-col is="section" class="expertise col-lg-6 mx-auto">
            <h3 class="">Expertise</h3>
            <ul>
              <li class="my-5" v-for="skill in expertise" :key="skill.index">
                <span class="d-block">{{skill.name}}</span>
                <b-progress :value="skill.value" :max="100" :variant="skill.variant" class="mb-3"></b-progress>
              </li>
            </ul>
          </b-col>
       </b-row>
      </b-container>
    </section>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      img: {
        bgTop: { src: require('../assets/img/homepage-top-bg.png') }
      },
      education: [
        {
          time: '2015 - 2018',
          institute: 'INSTITUTO FEDERAL DA BAHIA',
          type: 'Graduação tecnológica',
          desc: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
        },
        {
          time: '2016',
          institute: 'TOEFL IPT',
          type: 'English Certification',
          desc: 'Standard/Intermediate'
        }
      ],
      expertise: [
        { name: 'HTML && CSS/SASS', value: 85, variant: 'secondary' },
        { name: 'JavaScript && Node.js', value: 75, variant: 'secondary' },
        { name: 'REST/RESTFul', value: 70, variant: 'secondary' },
        { name: 'OOP && JAVA', value: 90, variant: 'secondary' }
      ]
    }
  }
}
</script>
