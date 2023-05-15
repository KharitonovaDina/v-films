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
};
</script>

<style lang="scss" scoped>
  .search-form {
    display: flex;
    align-items: center;
  }

  .search-form__input {
    width: 500px;
  }
</style>
