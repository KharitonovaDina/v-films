<template>
  <v-card flat class="episode-card">
    <img :src="require(`@/assets/img/tmp/${value.poster}`)" alt="" class="episode-card__img">
    <v-container class="reset episode-card__description">
      <v-card-title class="reset episode-card__series-title"> {{ value.series }} </v-card-title>
      <div class="episode-card__description-inner">
        <div class="episode-card__episode-wrap">
          <v-card-text
            class="reset episode-card__episode"
          >
            S{{ value.season }} | E{{ value.episode }}
          </v-card-text>
          <v-card-text class="reset"> {{value.title}} </v-card-text>
        </div>
        <v-btn small fab outlined class="episode-card__btn">
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: ['value'],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
  .episode-card {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: $bg-c-40;
    width: 100%;
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
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    color: $font-c;
  }
  .episode-card__description-inner {
    display: flex;
    justify-content: space-between;
  }
  .episode-card__episode-wrap {
    display: flex;
    flex-direction: column;
  }
  .episode-card__series-title {
    font-size: 18px;
  }
  .episode-card__episode {
    color: $primary-c;
    font-weight: 700;
  }
  .episode-card__btn {
    background-color: $secondary-c;
    &:hover {
      color: $primary-c;
     }
  }
</style>
