<template>
  <v-app>
    <HeaderBar/>
    <NavBar/>
    <WatchList/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import WatchList from '@/components/WatchList.vue';

export default {
  name: 'App',
  components: { WatchList, HeaderBar, NavBar },
  data: () => ({
    //
  }),
};
</script>
