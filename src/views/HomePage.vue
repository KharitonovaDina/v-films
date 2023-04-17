<template>
  <v-container class="home">
    <HeroSlider class="home__hero-slider"/>
    <MovieSlider/>
    <MovieSlider/>
    <MovieSlider/>
  </v-container>
</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue';
import MovieSlider from '@/components/MovieSlider.vue';

export default {
  name: 'HomePage',
  components: { MovieSlider, HeroSlider },
};
</script>

<style>
  .home {
    padding: 40px;
  }
  .home__hero-slider {
    margin-bottom: 36px;
  }
</style>
