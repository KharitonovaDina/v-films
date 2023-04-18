<template>
  <v-navigation-drawer
    class="watch-list"
    app
    tag="aside"
    right
    width="400">
    <h3 class="watch-list__title">Watch List</h3>
    <v-list>
      <v-list-item
        v-for="(item,i) in cards"
        :key="i"
        class="watch-list__episode"
      >
        <EpisodeCard
          :value="item"
        />
      </v-list-item>
    </v-list>
<!--    <PrimaryBtn title="See more"/>-->
  </v-navigation-drawer>
</template>

<script>
import EpisodeCard from '@/components/EpisodeCard.vue';
// import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'WatchList',
  components: {
    EpisodeCard,
    // PrimaryBtn,
  },
  data() {
    return {
      cards: [
        {
          poster: 'tmp-7.jpg',
          series: 'Supernatural',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor no who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .watch-list {
    padding: 16px;
    background-color: $sidebar-c;
  }
  .watch-list__title {
    margin-bottom: 16px;
    color: $font-c;
    font-size: 24px;
    font-weight: 700;
  }
  .watch-list__episode {
    margin-bottom: 16px;
  }
</style>
