<template v-slot:activator="{ on, attrs }">
    <v-btn
      color="red lighten-2"
      dark
      v-bind="attrs"
      v-on="on"
    >
      Login
    </v-btn>
</template>

<script>
export default {
  name: 'LoginBtn',
};
</script>

<style scoped>

</style>
