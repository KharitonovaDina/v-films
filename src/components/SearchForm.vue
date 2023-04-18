<template>
  <v-form
    class="search-form"
  >
    <div class="search-form__input">
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
    <PrimaryBtn title="Search"/>
  </v-form>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'SearchForm',
  components: { PrimaryBtn },
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
    height: 36px;
    margin-right: 24px;
    background-color: $font-c;
  }
</style>
