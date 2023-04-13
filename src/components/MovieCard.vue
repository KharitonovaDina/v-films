<template>
  <v-card class="movie-card">
    <div class="movie-card__img-wrap">
      <img class="movie-card__img" :src="require(`@/assets/img/tmp/${value.poster}`)" alt="">
    </div>
<!--    <div class="movie-card__btn-wrap">-->
<!--      <PrimaryBtn title="Watch now"/>-->
<!--      <AddBtn/>-->
<!--    </div>-->
  </v-card>
</template>

<script>
// import AddBtn from '@/components/AddBtn.vue';
// import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'MovieCard',
  // components: { PrimaryBtn, AddBtn },
};
</script>

<style scoped>
  .movie-card {
    position: relative;
    overflow: hidden;
    width: 183px;
    height: 274px;
  }
  .movie-card__img-wrap {
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
  .movie-card__img {
    width: 100%;
    height: 100%;
  }
  /*.movie-card__btn-wrap {*/
  /*  position: absolute;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
</style>
