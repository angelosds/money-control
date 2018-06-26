<template>
  <div>
    <a
      :class="'-color' + color"
      href="#"
      class="card-info ripple-button">
      <h1 class="title">{{ name }}</h1>
      <svg
        :class="'-' + type"
        class="icon"><use :xlink:href="'./static/images/icons.svg#icon-' + type" /></svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
@import 'tools/*'

.card-info
  padding-top $gap
  padding-right $gap
  padding-bottom 'calc(50% - (%s * 2))' % $gap
  padding-left $gap
  margin-bottom $gap
  border-radius 10px
  box-sizing border-box
  text-decoration none
  display block
  position relative
  overflow hidden

  &:before
  &:after
    content ''
    border-radius 100%
    position absolute
    border 40px solid

  &:before
    top -50px
    left -70px
    width 180px
    height 180px
    border-color alpha($inverse, 8%)

  &:after
    top 20px
    right -40px
    width 220px
    height 220px
    border-color alpha($inverse, 5%)

  &.-color1
    background-color $color-1
    box-shadow 0 10px 25px 0 alpha($color-1, 30%)

  &.-color2
    background-color $color-2
    box-shadow 0 10px 25px 0 alpha($color-2, 30%)

  &.-color3
    background-color $color-3
    box-shadow 0 10px 25px 0 alpha($color-3, 30%)

  &.-color4
    background-color $color-4
    box-shadow 0 10px 25px 0 alpha($color-4, 30%)

  > .title
    margin 0
    color $inverse
    font-size 2rem
    font-weight 500

  > .icon
    right 20px
    width 60px
    height 60px
    fill $inverse
    position absolute

    &.-visa
      bottom 2px

    &.-mastercard
      bottom 8px
</style>

