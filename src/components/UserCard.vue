<template>
  <v-card flat class="user-card">
    <v-avatar class="user-card__avatar">
      <img src="/avatar.jpg" alt="avatar">
    </v-avatar>
    <div>
      <v-card-title class="pa-0"> {{ name }} </v-card-title>
      <v-card-text class="pa-0"> {{ email }} </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  data() {
    return {
      avatar: '',
      name: 'Kharitonova Dina',
      email: 'd.i.haritonova@yandex.ru',
    };
  },
};
</script>

<style scoped>
  .user-card {
    display: flex;
    margin-bottom: 24px;
  }
  .user-card__avatar {
    margin-right: 16px;
  }

</style>
