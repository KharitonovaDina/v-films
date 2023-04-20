<template>
  <v-container class="home">
    <HeroSlider class="home__hero-slider"/>
    <Slider title="Watch now" arr="Watch now"/>
    <Slider title="Didn't watch" arr="To be continued"/>
    <Slider title="Viewed" arr="Done"/>
  </v-container>
</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue';
import Slider from '@/components/Slider.vue';

export default {
  name: 'HomePage',
  components: { Slider, HeroSlider },
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
