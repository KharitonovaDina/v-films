<template>
  <v-card class="movie-card">
    <div class="movie-card__img-wrap">
      <img class="movie-card__img" :src="require(`@/assets/img/tmp/${value.poster}`)" alt="">
    </div>
    <div class="movie-card__btn-wrap">
      <AddBtn class="movie-card__add-btn"/>
      <PrimaryBtn title="Watch now"/>
    </div>
  </v-card>
</template>

<script>
import AddBtn from '@/components/AddBtn.vue';
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'MovieCard',
  props: ['value'],
  components: { PrimaryBtn, AddBtn },
};
</script>

<style lang="scss" scoped>
  .movie-card {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    border: none;
  }
  .movie-card__img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .movie-card__img {
    width: 100%;
    height: auto;
  }
  .movie-card__btn-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    opacity: 70%;
    &:hover {
      opacity: 100%;
    }
  }
  .movie-card__add-btn {
    align-self: end;
  }
</style>
