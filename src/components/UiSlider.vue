<template>
  <v-container class="movie-slider">
    <h3 class="movie-slider__title">
      {{ title }}
    </h3>
    <v-slide-group dark>
      <v-slide-item
        v-for="(item, i) in filteredArr"
        :key="i"
        class="movie-slider__item"
      >
<!--        <MovieCard :value="item"/>-->
        <SerialCard
          :value="item"
        />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import SerialCard from '@/components/SerialCard.vue';

export default {
  name: 'UiSlider',

  components: { SerialCard },

  props: ['title', 'arr'],

  data: () => ({
  }),

  computed: {
    filteredArr() {
      return this.movies.filter((movie) => (movie.status === this.arr));
    },
    movies() {
      return this.$store.state.movies;
    },
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
