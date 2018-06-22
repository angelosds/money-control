<template>
  <nav class="main-nav">
    <ul class="list">
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          A
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          A
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -action">
          <svg
            class="icon"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24">
            <g class="line">
	            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/>
            </g>
          </svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          A
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default">
          A
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

    &.-action
      height $action-size
      width $action-size
      background-image $primary-gradient
      border-radius $action-size
      box-shadow 0 10px 50px 0 alpha($primary, 50%)
      transform translateY(-15px)

      > .icon
        width 35px

        .line
          fill $inverse

    &.-default
      height $nav-height

      > .icon
        width 24px

        .line
          fill $light
</style>
