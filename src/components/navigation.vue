<template>
  <nav class="main-nav">
    <ul class="list">
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-wallet" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default -active">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-card" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -action">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-plus" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-account" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-settings" /></svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  @import 'tools/*'

  $nav-height = 70px
  $action-size = 70px

  .main-nav
    bottom 0
    left 0
    width 100%
    height $nav-height
    background-color $inverse
    box-shadow 0 0 120px 0 alpha($primary, 15%)
    position fixed

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

    > .icon
      transition .2s fill linear

    &.-action
      height $action-size
      width $action-size
      background-image $primary-gradient
      border-radius $action-size
      box-shadow 0 10px 50px 0 alpha($primary, 50%)
      transform translateY(-15px)

      > .icon
        width 35px
        fill $inverse

    &.-default
      height $nav-height

      > .icon
        width 24px
        fill $light

      &.-active
        > .icon
          fill $primary
</style>
