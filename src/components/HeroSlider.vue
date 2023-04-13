<template>
  <v-carousel
    :show-arrows="false"
    cycle
    interval="100000"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(item, i) in slides"
      :key="i"
    >
      <HeroCard :value="item"/>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import HeroCard from '@/components/HeroCard.vue';

export default {
  name: 'HeroSlider',
  components: { HeroCard },
  data() {
    return {
      slides: [
        {
          poster: 'hero.jpg',
          title: 'Supernatural',
          description: 'Action, horror, comedy',
        },
        {
          poster: 'hero.jpg',
          title: 'Supernatural',
          description: 'Action, horror, comedy',
        },
        {
          poster: 'hero.jpg',
          title: 'Supernatural',
          description: 'Action, horror, comedy',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
