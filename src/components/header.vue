<template>
  <header class="main-header">
    <h1 class="title">AppName</h1>
    <h2 class="subtitle">Details</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  @import 'tools/*'

  .main-header
    padding-top 25px
    align-items center
    flex-direction column
    display flex

    > .title
      margin 0
      font-size 1.8rem
      font-weight 600

    > .subtitle
      margin 0
      color $light
      font-size 1.6rem
      font-weight 500
      opacity .5
</style>
