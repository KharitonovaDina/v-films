<template>
  <v-container class="home">
    <HeroSlider/>
  </v-container>
</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue';

export default {
  name: 'HomePage',
  components: { HeroSlider },
};
</script>

<style>
  .home {
    padding: 40px;
  }
</style>
