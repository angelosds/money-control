<template>
  <div>
    <main-header :title="title" />
    <main-nav />
  </div>
</template>

<script>
  import Header from './components/header';
  import Navigation from './components/navigation';

  export default {
    name: 'App',
    components: {
      'main-header': Header,
      'main-nav': Navigation
    },
    data () {
      return {
        title: 'App name'
      }
    }
  }
</script>

<style lang="stylus">
  @import 'base.styl'
</style>
