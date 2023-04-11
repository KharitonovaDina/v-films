<template>
  <v-navigation-drawer
    class="watch-list"
    app
    tag="aside"
    right
    width="370">
    <h3 class="watch-list__title">Watch List</h3>
    <v-list>
      <v-list-item
        v-for="item in cards"
        :key="item.series"
        class="watch-list__episode"
      >
        <EpisodeCard
          :poster="item.poster"
          :series=item.series
          :season=item.season
          :episode=item.episode
          :title=item.title
        >
        </EpisodeCard>
      </v-list-item>
    </v-list>
    <PrimaryBtn title="See more"/>
  </v-navigation-drawer>
</template>

<script>
import EpisodeCard from '@/components/EpisodeCard.vue';
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'WatchList',
  components: {
    EpisodeCard,
    PrimaryBtn,
  },
  data() {
    return {
      cards: [
        {
          poster: '/tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: '/tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: '/tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: '/tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: '/tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia',
        },
        {
          poster: '/tmp-7.jpg',
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

<style scoped>
  .watch-list {
    padding: 16px;
  }
  .watch-list__title {
    margin-bottom: 16px;
    color: grey;
  }
  .watch-list__episode {
    margin-bottom: 16px;
  }
</style>
