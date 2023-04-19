<template>
  <v-app-bar
    class="header"
    app
    flat
    hide-on-scroll
    color="transparent"
  >
    <div class="header__wrap">
      <router-link
        class="header__logo"
        to="/"
      >
        Filmoteka
      </router-link>
      <SearchForm/>
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
  .header {
    padding: 0 24px ;
  }
  .header__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .header__logo {
    text-transform: uppercase;
    text-decoration: none;
    font-family: $logo-f;
    color: $font-c;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 24px;
    text-align: center;
  }
</style>
