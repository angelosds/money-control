<template>
  <main-header :title="title" />
</template>

<script>
  import Header from './components/header';

  export default {
    name: 'App',
    components: {
      'main-header': Header
    },
    data () {
      return {
        title: 'App name'
      }
    }
  }
</script>

<style lang="styl">
  @import 'base.styl';
</style>
