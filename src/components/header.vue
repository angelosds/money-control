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
    padding-top 25px
    align-items center
    flex-direction column
    display flex

    > .title
      margin 0
      font-size 1.8rem
      font-weight 600
</style>
