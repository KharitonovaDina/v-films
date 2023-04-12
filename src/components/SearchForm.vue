<template>
  <v-form
    ref="searchForm"
    class="search-form"
  >
    <v-autocomplete
      class="search-form__input"
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="Search"
      solo-inverted
    />
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
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
      ],
    };
  },
  // watch: {
  //   search(val) {
  //     val && val !== this.select && this.querySelections(val);
  //   },
  // },
  // methods: {
  //   querySelections(v) {
  //     this.loading = true;
  //     // Simulated ajax query
  //     setTimeout(() => {
  //       this.items = this.states.filter(e => {
  //         return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
  //       });
  //       this.loading = false;
  //     }, 500);
  //   },
  // },
};
</script>

<style scoped>
  .search-form {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .search-form__input {
    width: 500px;
    margin-right: 24px;
  }
</style>
