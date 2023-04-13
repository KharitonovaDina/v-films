<template>
  <v-btn class="add-btn" depressed>
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'AddBtn',
};
</script>

<style scoped>
  .v-btn.add-btn {
    padding: 0;
    height: 36px;
    min-width: 36px;
}
</style>
