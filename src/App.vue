<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a
          href="#"
          class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span class="mdc-top-app-bar__title">{{ title }}</span>
      </section>
    </div>
  </header>
</template>

<script>
  import { MDCTopAppBar } from '@material/top-app-bar/index';

  export default {
    name: 'App',
    data () {
      return {
        title: 'Header'
      }
    },
    mounted() {
      const topAppBarElement = this.$el;
      const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://necolas.github.io/normalize.css/8.0.0/normalize.css");

  @import "@material/button/mdc-button";
  @import "@material/top-app-bar/mdc-top-app-bar";
</style>
