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

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="styl">

</style>
