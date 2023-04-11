<template>
  <v-navigation-drawer
    class="nav-bar"
    tag="nav"
    app
    width="300px"
  >
    <router-link class="nav-bar__logo" to="/"> Filmoteka </router-link>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        router :to="item.route"
      >
        <v-list-item-icon>
          <v-icon> {{ item.icon }} </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <UserCard v-if="auth"/>
    <PrimaryBtn v-else class="nav-bar__login-btn" title="Login"/>
  </v-navigation-drawer>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'NavBar',
  components: { UserCard, PrimaryBtn },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'mdi-home',
          route: '/',
        },
        {
          title: 'Films',
          icon: 'mdi-movie',
          route: '/films',
        },
        {
          title: 'Сериалы',
          icon: 'mdi-video-check',
          route: '/series',
        },
      ],
      auth: true,
    };
  },
};
</script>

<style scoped>
  .nav-bar {
    padding: 16px;
  }
  /* {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*}*/
  .nav-bar__logo {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 32px;
  }
  .nav-bar__login-btn {
    width: 100%;
  }
</style>
