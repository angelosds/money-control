<template>
  <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
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
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted () {
    const topAppBar = new MDCTopAppBar(this.$el);
  }
}
</script>

<style lang="scss">
  @import 'colors.scss';
  @import "@material/top-app-bar/mdc-top-app-bar";

  body {
    margin-bottom: 2000px;
  }
</style>
