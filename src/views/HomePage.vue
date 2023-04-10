<template>
  <v-container class="home">
    <WatchList/>
  </v-container>
</template>

<script>

import WatchList from '@/components/WatchList.vue';

export default {
  name: 'HomePage',
  components: {
    WatchList,
  },
};
</script>
