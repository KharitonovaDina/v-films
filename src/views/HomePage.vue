<template>
  <v-container class="home">
    <HeroSlider/>
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
</style>
