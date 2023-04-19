<template>
  <v-container class="movie-slider">
    <h3 class="movie-slider__title"> {{ title }} </h3>
    <v-slide-group dark>
      <v-slide-item
        v-for="(item,i) in movies"
        :key="i"
        class="movie-slider__item"
      >
<!--        <MovieCard :value="item"/>-->
        <SerialCard :value="item" />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
// import MovieCard from '@/components/MovieCard.vue';
import SerialCard from '@/components/SerialCard.vue';

export default {
  name: 'MovieSlider',
  components: { SerialCard },
  props: ['title'],
  data() {
    return {
      movies: [
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '7.8',
          status: 'Watch now',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '7.9',
          status: 'Watch now',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.0',
          status: 'Watch now',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.1',
          status: 'Watch now',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.2',
          status: 'Watch now',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.3',
          status: 'Expected',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.4',
          status: 'Expected',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.4',
          status: 'Expected',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .movie-slider {
    display: flex;
    flex-direction: column;
  }
  .movie-slider__title {
    color: $font-c;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 28px;
  }

  .movie-slider__item {
    width: 183px;
    height: 274px;
    margin-right: 16px;
  }
</style>
