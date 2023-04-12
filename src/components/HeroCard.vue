<template>
  <v-card class="hero-card">
    <img class="hero-card__img" src="../assets/img/tmp/hero.jpg" alt="">
    <v-card-text class="black--text">Supernatural</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'HeroCard',
};
</script>

<style scoped>
  .hero-card {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
  }
  .hero-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
</style>
