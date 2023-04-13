<template>
  <v-card class="episode-card">
    <img :src="require(`@/assets/img/tmp/${value.poster}`)" alt="" class="episode-card__img">
    <v-container class="reset episode-card__description">
      <v-card-title class="reset"> {{ value.series }} </v-card-title>
      <v-card-text
        class="reset episode-card__episode"
      >
        S{{ value.season }} | E{{ value.episode }}
      </v-card-text>
      <v-card-text class="reset"> {{value.title}} </v-card-text>
    </v-container>
    <v-btn small fab outlined class="episode-card__btn">
      <v-icon>mdi-check</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .episode-card {
    display: flex;
    align-items: center;
    padding: 8px;
  }
  .episode-card__img{
    max-width: 100px;
    height: auto;
    /*height: 100%;*/
    object-fit: cover;
    /*background-size: cover;*/
    background-position: center center;
  }
  .reset {
    padding: 0;
  }
  .episode-card__description {
    padding: 0 16px;
  }
  .episode-card__episode {
    color: orangered;
    font-weight: 700;
  }
  .episode-card__btn {
    color: grey;
    background-color: white;

    &:hover {
      color: orangered;
     }
  }
</style>
