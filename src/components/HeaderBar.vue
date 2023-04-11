<template>
  <v-app-bar
    app
    flat
    color="transparent"
  >
    <SearchBar/>
  </v-app-bar>
</template>

<script>
import SearchBar from '@/components/SearchForm.vue';

export default {
  name: 'HeaderBar',
  components: { SearchBar },
};
</script>

<style scoped>
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
</style>
