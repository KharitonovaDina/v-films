<template>
  <v-app-bar
    class="header"
    app
    flat
    hide-on-scroll
    color="transparent"
  >
    <div class="header__wrap">
      <SearchForm/>
      <v-btn icon>
        <v-icon color="white">mdi-bell</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'HeaderBar',
  components: { SearchForm },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
  .v-toolbar>.v-toolbar__content {
    padding: 0;
  }
  .header__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
