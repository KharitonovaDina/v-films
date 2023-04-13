<template>
  <v-card flat class="user-card">
    <v-avatar class="user-card__avatar">
      <img :src="require(`@/assets/img/tmp/${avatar}`)" alt="avatar">
    </v-avatar>
    <div>
      <v-card-text class="user-card__name"> {{ name }} </v-card-text>
      <v-card-text class="user-card__email"> {{ email }} </v-card-text>
    </div>
    <v-btn class="user-card__logout-btn" icon>
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  data() {
    return {
      avatar: 'avatar.jpg',
      name: 'Dina Kharitonova',
      email: 'd.i.haritonova@yandex.ru',
    };
  },
};
</script>

<style lang="scss" scoped>
  .user-card {
    display: flex;
    align-items: center;
  }
  .user-card__avatar {
    margin-right: 12px;
  }
  .user-card__name {
    padding: 0;
    font-size: 16px;
  }
  .user-card__email {
    padding: 0;
    font-size: 12px;
  }
  .user-card__logout-btn {
    margin-left: 8px;

    &:hover {
      color: orangered;
      transform: translateX(20%);
     }
  }
</style>
