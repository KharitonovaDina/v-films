<template>
  <v-container class="movie-slider">
    <h3 class="movie-slider__title"> {{ title }} </h3>
    <v-slide-group dark>
      <v-slide-item
        v-for="(item,i) in filteredArr"
        :key="i"
        class="movie-slider__item"
      >
<!--        <MovieCard :value="item"/>-->
        <SerialCard :value="item" v-on:progress="addProgress(i)"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import SerialCard from '@/components/SerialCard.vue';

export default {
  name: 'MovieSlider',
  components: { SerialCard },
  props: ['title', 'arr'],
  data() {
    return {
      movies: [
        {
          poster: 'tmp-3.jpg',
          title: 'Game of thrones',
          rating: '7.8',
          status: 'To be continued',
          progress: '25',
          rout: '/serial',
        },
        {
          poster: 'tmp-2.jpg',
          title: 'Game of thrones',
          rating: '7.9',
          status: 'Done',
          progress: '75',
          rout: '/serial',
        },
        {
          poster: 'tmp-1.jpg',
          title: 'Game of thrones',
          rating: '8.0',
          status: 'To be continued',
          progress: '95',
          rout: '/serial',
        },
        {
          poster: 'tmp-4.jpg',
          title: 'Game of thrones',
          rating: '8.1',
          status: 'To be continued',
          progress: '57',
          rout: '/serial',
        },
        {
          poster: 'tmp-2.jpg',
          title: 'Game of thrones',
          rating: '8.2',
          status: 'Done',
          progress: '27',
          rout: '/serial',
        },
        {
          poster: 'tmp-3.jpg',
          title: 'Game of thrones',
          rating: '8.3',
          status: 'To be continued',
          progress: '35',
          rout: '/serial',
        },
        {
          poster: 'tmp-1.jpg',
          title: 'Game of thrones',
          rating: '8.1',
          status: 'To be continued',
          progress: '57',
          rout: '/serial',
        },
        {
          poster: 'tmp-3.jpg',
          title: 'Game of thrones',
          rating: '8.3',
          status: 'To be continued',
          progress: '35',
          rout: '/serial',
        },
        {
          poster: 'tmp-2.jpg',
          title: 'Game of thrones',
          rating: '8.2',
          status: 'Done',
          progress: '27',
          rout: '/serial',
        },
      ],
    };
  },
  computed: {
    filteredArr() {
      return this.movies.filter((movie) => (movie.status === this.arr));
    },
  },
  watch: {
  },
  methods: {
    addProgress(i) {
      this.filteredArr[i].progress = (+(this.filteredArr[i].progress) + 10);
      if (this.filteredArr[i].progress >= 100) {
        this.filteredArr[i].status = 'Done';
      }
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
