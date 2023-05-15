<template>
  <v-btn
    class="add-btn"
    depressed
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'AddBtn',
};
</script>

<style lang="scss" scoped>
  .v-btn.add-btn {
    padding: 0;
    height: 36px;
    min-width: 36px;
    width: 36px;
    background-color: $secondary-c;
    color: $bg-c;

    &:hover {
      color: $primary-c;
    }
  }
</style>
