<template>
  <v-container class="movie-slider">
    <h3 class="movie-slider__title"> Continue watch</h3>
    <v-slide-group>
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
  data() {
    return {
      movies: [
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
        {
          poster: 'tmp-4.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";
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
