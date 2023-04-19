<template>
  <v-card class="movie-card">
    <div class="movie-card__img-wrap">
      <img class="movie-card__img" :src="require(`@/assets/img/tmp/${value.poster}`)" alt="">
    </div>
    <div class="movie-card__wrap" >
      <div class="movie-card__rating-wrap">
        <v-icon small color="orange">mdi-star</v-icon>
        <span class="movie-card__rating"> {{ value.rating }} </span>
      </div>
      <h4 class="movie-card__title"> {{ value.title }} </h4>
      <div class="movie-card__btn-wrap">
        <PrimaryBtn title="Watch now"/>
        <AddBtn class="movie-card__add-btn"/>
      </div>
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
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    border-radius: 4px;
    border: none;
  }
  .movie-card__img-wrap {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $bg-c;
      opacity: 0.2;
    }
  }
  .movie-card__img {
    width: 100%;
    height: auto;
  }
  .movie-card__wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    &:hover .movie-card__btn-wrap {
      opacity: 100%;
    }
    &:hover .movie-card__title {
      color: $primary-c;
    }
  }
  .movie-card__btn-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    opacity: 70%;
    column-gap: 8px;
  }
  .movie-card__add-btn {
    align-self: end;
  }
  .movie-card__title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
    color: $font-c;
    align-items: end;
  }
  .movie-card__rating-wrap {
    display: flex;
    align-items: start;
    align-self: end;
    flex-basis: 80%;
  }
  .movie-card__rating {
    font-size: 14px;
  }
</style>
