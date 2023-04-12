<template>
  <v-carousel>
    <v-carousel-item
      v-for="item in slides"
      :key="item.title"
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
          poster: '../src/assets/img/tmp/hero.jpg',
          title: 'Слайд 1',
          description: 'Слайд 1',
        },
        {
          poster: '../src/assets/img/tmp/hero.jpg',
          title: 'Слайд 2',
          description: 'Слайд 2',
        },
        {
          poster: '../src/assets/img/tmp/hero.jpg',
          title: 'Слайд 3',
          description: 'Слайд 3',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
