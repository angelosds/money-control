<template>
  <div class="page-content">
    <main-card
      name="Teste"
      color="1"
      type="visa" />
    <main-card
      name="Teste"
      color="2"
      type="mastercard" />
    <main-card
      name="Teste"
      color="3"
      type="visa" />
    <main-card
      name="Teste"
      color="4"
      type="mastercard" />
  </div>
</template>

<script>
import Card from '../components/card'

export default {
  components: {
    'main-card': Card
  }
}
</script>
