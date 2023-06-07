<template>
  <v-card
    flat
    class="user-card"
  >
    <div class="user-card__wrap">
      <v-avatar class="user-card__avatar">
        <img
          v-if="user.avatar"
          :src="require(`@/assets/img/tmp/${user.avatar}`)"
          alt="avatar"
        >
      </v-avatar>
      <div>
        <v-card-text class="user-card__name">
          {{ user.userName }}
        </v-card-text>
        <v-card-text class="user-card__email">
          {{ user.email }}
        </v-card-text>
      </div>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="user-card__logout-btn"
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="user-card__btn-icon">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <router-link to="/profile" @click="$emit('logout')"></router-link>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  data: () => ({
    items: [
      {
        title: 'Profile',
        route: '/profile',
      },
      {
        title: 'Logout',
        route: '/',
      }],
  }),

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
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
