export default {
  methods: {
    ripple(e) {
      e.preventDefault();

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
