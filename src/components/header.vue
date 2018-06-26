<template>
  <header class="main-header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.Global.title;
    }
  }
}
</script>

<style lang="stylus">
  @import 'tools/*'

  .main-header
    top 0
    left 0
    width 100%
    height $header-height
    background-color alpha($inverse, 50%)
    align-items center
    justify-content center
    display flex
    position fixed
    z-index 1000

    > .title
      margin 0
      font-size 1.8rem
      font-weight 600
</style>
