<template>
  <v-container class="movie-slider">
    <h3 class="movie-slider__title"> {{ title }} </h3>
    <v-slide-group dark>
      <v-slide-item
        v-for="(item,i) in movies"
        :key="i"
        class="movie-slider__item"
      >
        <MovieCard :value="item"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MovieSlider',
  components: { MovieCard },
  props: ['title'],
  data() {
    return {
      movies: [
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '7.8',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '7.9',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.0',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.1',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.2',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.3',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.4',
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
