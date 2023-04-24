<template>
  <v-card flat class="user-card">
    <div class="user-card__wrap">
      <v-avatar class="user-card__avatar">
        <img :src="require(`@/assets/img/tmp/${avatar}`)" alt="avatar">
      </v-avatar>
      <div>
        <v-card-text class="user-card__name"> {{ name }} </v-card-text>
        <v-card-text class="user-card__email"> {{ email }} </v-card-text>
      </div>
    </div>
    <v-btn class="user-card__logout-btn" icon @click="$emit('logout')">
      <v-icon class="user-card__btn-icon">mdi-dots-vertical</v-icon>
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
      password: '12345678',
    };
  },
};
</script>

<style lang="scss" scoped>
  .user-card {
    display: flex;
    align-items: center;
    background-color: transparent;
    justify-content: space-between;
    color: $font-c;
  }
  .user-card__wrap {
    display: flex;
    justify-content: start;
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
      color: $primary-c;
    }
    & .user-card__btn-icon {
      color: $font-c;
    }
    &:hover .user-card__btn-icon {
      color: $primary-c;
    }
  }
</style>
