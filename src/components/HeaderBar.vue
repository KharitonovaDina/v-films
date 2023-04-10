<template>
  <v-app-bar
    app
    flat
    color="transparent"
  >
    <SearchBar/>
    <UserCard/>
  </v-app-bar>
</template>

<script>
import SearchBar from '@/components/SearchForm.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'HeaderBar',
  components: { UserCard, SearchBar },
};
</script>

<style scoped>
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
</style>
