<template>
  <v-navigation-drawer
    tag="nav"
    app
  >
    <router-link to="/"> Filmoteka </router-link>
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
    <PrimaryBtn title="Login"/>
  </v-navigation-drawer>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'NavBar',
  components: { PrimaryBtn },
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
    };
  },
};
</script>

<style scoped>

</style>
