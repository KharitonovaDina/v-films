<template>
  <v-app>
    <HeaderBar/>
    <WatchList/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import WatchList from '@/components/WatchList.vue';

export default {
  name: 'App',

  components: {
    WatchList,
    HeaderBar,
  },

  data: () => ({
    //
  }),

  created() {
    this.$store.dispatch('fetchUser');
  },
};
</script>
