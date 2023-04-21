<template>
  <v-navigation-drawer
    class="watch-list"
    app
    tag="aside"
    right
    width="400">
    <div class="watch-list__user">
      <UserCard
        v-if="auth"
        v-on:logout="logout"
      />
      <LoginDialog v-else @click="$emit('login')"/>
    </div>
    <h3 class="watch-list__title">Watch List</h3>
    <v-list>
      <v-list-item
        v-for="(item,i) in cards"
        :key="i"
        class="watch-list__episode"
      >
        <EpisodeCard
          v-on:delete="deleteEpisode(i)"
          :value="item"
        />
      </v-list-item>
    </v-list>
<!--    <PrimaryBtn title="See more"/>-->
  </v-navigation-drawer>
</template>

<script>
import EpisodeCard from '@/components/EpisodeCard.vue';
import UserCard from '@/components/UserCard.vue';
// import PrimaryBtn from '@/components/PrimaryBtn.vue';
import LoginDialog from '@/components/LoginDialog.vue';

export default {
  name: 'WatchList',
  components: {
    LoginDialog,
    UserCard,
    EpisodeCard,
  },
  data() {
    return {
      cards: [
        {
          poster: 'tmp-7.jpg',
          series: 'Supernatural',
          season: '01',
          episode: '03',
          title: 'Utopia1',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor no who?',
          season: '01',
          episode: '03',
          title: 'Utopia2',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia3',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia4',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia5',
        },
        {
          poster: 'tmp-7.jpg',
          series: 'Doctor who?',
          season: '01',
          episode: '03',
          title: 'Utopia6',
        },
      ],
      auth: true,
    };
  },
  methods: {
    deleteEpisode(i) {
      this.cards.splice(i, 1);
    },
    logout() {
      this.auth = false;
    },
    login() {
      this.auth = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .watch-list {
    padding: 32px 16px;
    background-color: $sidebar-c;
  }
  .watch-list__user {
    margin-bottom: 32px;
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
