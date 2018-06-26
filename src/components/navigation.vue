<template>
  <nav class="main-nav">
    <ul class="list">
      <li class="item">
        <router-link
          v-ripple
          class="nav-link -default ripple-item"
          to="/balance">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-wallet" /></svg>
        </router-link>
      </li>
      <li class="item">
        <router-link
          v-ripple
          class="nav-link -default ripple-item"
          to="/cards">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-card" /></svg>
        </router-link>
      </li>
      <li class="item">
        <a
          v-ripple
          href="#"
          class="nav-link -action">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-plus" /></svg>
        </a>
      </li>
      <li class="item">
        <router-link
          v-ripple
          class="nav-link -default ripple-item"
          to="/account">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-account" /></svg>
        </router-link>
      </li>
      <li class="item">
        <router-link
          v-ripple
          class="nav-link -default ripple-item"
          to="/settings">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-settings" /></svg>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import ripple from './ripple'

export default {
  extends: ripple
}
</script>

<style lang="stylus">
  @import 'tools/*'

  $action-size = 70px

  .main-nav
    bottom 0
    left 0
    width 100%
    height $navigation-height
    background-color $inverse
    box-shadow 0 0 120px 0 alpha($light, 15%)
    position fixed
    z-index 1000

    > .list
      padding 0
      margin 0
      width 100%
      display flex

      > .item
        width 20%
        justify-content center
        display flex

  .nav-link
    align-items center
    justify-content center
    display flex

    &.-action
      height $action-size
      width $action-size
      background-image $primary-gradient
      border-radius $action-size
      box-shadow 0 10px 50px 0 alpha($primary, 50%)
      transform translateY(-15px)

      > .ripple
        background-color alpha($inverse, 40%)

      > .icon
        width 35px
        height 35px
        fill $inverse

    &.-default
      width 100%
      height $navigation-height

      > .ripple
        background-color alpha($light, 20%)

      > .icon
        width 24px
        height 24px
        fill $light

      &.-active
        > .ripple
          background-color alpha($primary, 20%)

        > .icon
          fill $primary

</style>
