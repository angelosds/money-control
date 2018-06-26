<template>
  <div />
</template>

<script>
export default {
  directives: {
    ripple: {
      bind(el) {
        el.classList.add('ripple-item');

        const click = (e) => {
          e.preventDefault();

          const el = e.srcElement;
          const ripple = document.createElement('span');

          el.appendChild(ripple);

          ripple.classList.add('ripple');
          ripple.style.top = `calc(${e.offsetY}px - ${ripple.offsetHeight / 2}px)`;
          ripple.style.left = `calc(${e.offsetX}px - ${ripple.offsetWidth / 2}px)`;

          setTimeout(() => ripple.remove(), 600);
        }

        el.addEventListener('click', click)
      }
    }
  }
}
</script>

<style lang="stylus">
.ripple-item
  position relative
  overflow hidden

  > .ripple
    padding-bottom 240%
    width 240%
    border-radius 100%
    animation .6s ripple linear forwards
    position absolute

  *
    pointer-events none

@keyframes ripple
  0%
    opacity .4
    transform scale(0)
  50%
    opacity 1
    transform scale(1)
  100%
    opacity 0
</style>

