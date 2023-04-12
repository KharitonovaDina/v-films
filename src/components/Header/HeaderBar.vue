<template>
  <v-app-bar
    class="header"
    app
    flat
    color="transparent"
    height="100%"
  >
    <SearchForm/>
  </v-app-bar>
</template>

<script>
import SearchForm from '@/components/Header/SearchForm.vue';

export default {
  name: 'HeaderBar',
  components: { SearchForm },
};
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 16px 40px;
  }
</style>
