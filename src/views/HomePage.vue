<template>
  <v-container class="home">
    <HeroSlider class="home__hero-slider"/>
    <UiSlider
      title="Watch now"
      arr="Watch now"
    />
    <UiSlider
      title="Didn't watch"
      arr="To be continued"
    />
    <UiSlider
      title="Viewed"
      arr="Done"
    />
    <span>{{ status }}</span>
  </v-container>
</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue';
import UiSlider from '@/components/UiSlider.vue';

export default {
  name: 'HomePage',

  components: {
    UiSlider,
    HeroSlider,
  },

  computed: {
    status() {
      return this.$store.getters.watchNow;
    },
  },
  // async await
  // created() {
  //   this.$store.dispatch('fetchUser');
  // },
};
</script>

<style>
  .home {
    padding: 40px;
  }

  .home__hero-slider {
    margin-bottom: 36px;
  }
</style>
