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
      <v-btn class="header__notification" icon>
        <v-icon class="header__icon">mdi-bell</v-icon>
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
  .header__notification {
    & .header__icon {
      color: $font-c;
    }
    &:hover .header__icon{
      color: $primary-c;
    }
  }
</style>
