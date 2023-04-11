<template>
  <v-card class="episode-card">
    <img src="/tmp-7.jpg" alt="" class="episode-card__img">
    <v-container class="reset episode-card__description">
      <v-card-title class="reset"> {{ series }} </v-card-title>
      <v-card-text class="reset episode-card__episode">S{{ season }} | E{{ episode }}</v-card-text>
      <v-card-text class="reset"> {{title}} </v-card-text>
    </v-container>
    <v-btn small fab outlined class="episode-card__btn">
      <v-icon>mdi-check</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: ['series', 'season', 'episode', 'title'],
};
</script>

<style scoped>
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
    color: green;
    font-weight: 700;
  }
  .episode-card__btn {
    color: grey;
    background-color: white;
  }
</style>
