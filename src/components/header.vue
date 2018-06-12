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
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted () {
    const topAppBarElement = this.$el;
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
}
</script>

<style lang="scss">
  @import 'colors.scss';
  @import "@material/top-app-bar/mdc-top-app-bar";
</style>
