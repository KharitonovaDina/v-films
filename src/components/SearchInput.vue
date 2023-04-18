<template>
  <div class="search-input">
    <v-autocomplete
      color="white"
      hide-no-data
      hide-selected
      hide-details
      label="Search"
      solo
      return-object
      prepend-inner-icon="mdi-magnify"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
  .search-input {
    margin-right: 24px;
    width: 500px;
  }
</style>
