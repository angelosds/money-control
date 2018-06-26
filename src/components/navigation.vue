<template>
  <nav class="main-nav">
    <ul class="list">
      <li class="item">
        <a
          href="#"
          class="nav-link -default ripple-button"
          @click="click">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-wallet" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default -active ripple-button"
          @click="click">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-card" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -action ripple-button"
          @click="click">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-plus" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default ripple-button"
          @click="click">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-account" /></svg>
        </a>
      </li>
      <li class="item">
        <a
          href="#"
          class="nav-link -default ripple-button"
          @click="click">
          <svg class="icon"><use xlink:href="./static/images/icons.svg#icon-settings" /></svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    click(e) {
      const el = e.srcElement;
      const ripple = document.createElement('span');

      el.appendChild(ripple);

      ripple.classList.add('ripple');
      ripple.style.top = `calc(${e.offsetY}px - ${ripple.offsetHeight / 2}px)`;
      ripple.style.left = `calc(${e.offsetX}px - ${ripple.offsetWidth / 2}px)`;

      setTimeout(() => ripple.remove(), 600);
    }
  }
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

      > .ripple
        background-color alpha($inverse, 40%)

      > .icon
        width 35px
        height 35px
        fill $inverse

    &.-default
      width 100%
      height $nav-height

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
