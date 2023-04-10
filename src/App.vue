<template>
  <v-app>
    <HeaderBar/>
    <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'App',
  components: { HeaderBar, NavBar },
  data: () => ({
    //
  }),
};
</script>
