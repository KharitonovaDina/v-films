<template>
  <v-card class="hero-card">
    <div class="hero-card__img-wrap">
      <img class="hero-card__img" :src="require(`@/assets/img/tmp/${value.poster}`)" alt="">
    </div>
    <div class="hero-card__info">
      <v-card-title class="hero-card__title">{{ value.title }}</v-card-title>
      <v-card-text class="hero-card__description">{{ value.description }}</v-card-text>
      <div class="hero-card__btn-wrap">
        <PrimaryBtn class="hero-card__btn" title="Watch now"/>
        <AddBtn class="hero-card__add-btn"/>
      </div>
    </div>
  </v-card>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';
import AddBtn from '@/components/AddBtn.vue';

export default {
  name: 'HeroCard',
  components: { AddBtn, PrimaryBtn },
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .hero-card {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .hero-card__img-wrap {
    position: relative;
    width: inherit;
    height: inherit;
    object-fit: cover;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.2;
      //z-index: 100;
    }
  }
  .hero-card__img {
    width: 100%;
    height: 100%;
  }
  .hero-card__info {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 100px;
  }
  .hero-card__title {
    text-transform: uppercase;
    color: white;
    font-size: 36px;
    margin-bottom: 12px;
    padding: 0;
  }
  .hero-card__description {
    color:white;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 20px;
    padding: 0;
  }
  .hero-card__btn-wrap {
    display: flex;
  }
  .hero-card__btn {
    margin-right: 10px;
  }
  .v-btn.hero-card__add-btn {
    padding: 0;
    height: 36px;
    min-width: 36px;
  }
</style>
