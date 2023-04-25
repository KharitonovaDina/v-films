<template>
  <v-form
    class="search-form"
  >
    <v-text-field
      class="mx-4 search-form__input"
      flat
      hide-details
      dark
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    />
  </v-form>
</template>

<script>

export default {
  name: 'SearchForm',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .search-form {
    display: flex;
    align-items: center;
  }
  .search-form__input {
    width: 500px;
    //height: 36px;
    //margin-right: 24px;
    //background-color: $font-c;
  }
</style>
