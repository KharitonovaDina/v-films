<template>
  <v-btn depressed class="primary-btn">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
  .v-btn.primary-btn {
    color: $font-c;
    background-color: $primary-c;
    text-transform: capitalize;
  }
</style>
