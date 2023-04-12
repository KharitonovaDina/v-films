<template>
  <v-card class="hero-card">
<!--    <img class="hero-card__img" :src=value.poster alt="">-->
    <div class="hero-card__info">
      <v-card-title class="black--text">{{ value.title }}</v-card-title>
      <v-card-text>{{ value.description }}</v-card-text>
      <div class="hero-card__btn-wrap">
        <PrimaryBtn title="Watch now"/>
        <AddBtn/>
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

<style scoped>
  .hero-card {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
  }
  .hero-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .hero-card__info {
    display: flex;
    flex-direction: column;
  }
  .hero-card__btn-wrap {
    display: flex;
  }
</style>
