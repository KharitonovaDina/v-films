<template>
  <v-btn class="primary-btn">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: ['title'],
};
</script>

<style scoped>
  .v-btn.primary-btn {
    color: white;
    background-color: orangered;
  }
</style>
