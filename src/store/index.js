import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
      {
        movieId: 1,
        kpId: '234584',
        favorites: false,
        watchValue: 100,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 2,
        kpId: '234583',
        favorites: false,
        watchValue: 25,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 3,
        kpId: '234578',
        favorites: false,
        watchValue: 100,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 4,
        kpId: '234582',
        favorites: false,
        watchValue: 22,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 5,
        kpId: '234581',
        favorites: false,
        watchValue: 0,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 6,
        kpId: '234580',
        favorites: false,
        watchValue: 100,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 7,
        kpId: '234579',
        favorites: false,
        watchValue: 0,
        date_of_last_watch: '26.03.2023',
      },
      {
        movieId: 8,
        kpId: '234578',
        favorites: false,
        watchValue: 95,
        date_of_last_watch: '26.03.2023',
      },
      // {
      //   poster: 'tmp-2.jpg',
      //   title: 'Game of thrones',
      //   rating: '8.2',
      //   status: 'Done',
      //   progress: '27',
      //   route: '/serial',
      // },
    ],
    user: {},
  },
  getters: {
    watched: (state) => state.movies.filter((movie) => movie.watchValue === 100),
    notWatched: (state) => state.movies.filter((movie) => movie.watchValue === 0),
    watchNow: (state) => (
      state.movies.filter((movie) => movie.watchValue < 100 && movie.watchValue > 0)
    ),
    getUser: (state) => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      const result = await fetch('http://localhost:3000/api/users/6');
      const user = await result.json();
      commit('setUser', {
        email: user.email,
        userName: user.user_name,
        avatar: user.avatar,
        password: user.password,
        userId: user.user_id,
      });
    },

    async addUser({ commit }, payload) {
      const response = (await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload,
      })).json();
      commit('setUser', response);
    },

    async deleteUser({ commit }) {
      const response = (await fetch(' http://localhost:3000/api/users/9', {
        method: 'DELETE',
      })).json();
      commit('setUser', response);
    },
  },

  // const arr = [];
  //
  // const newArr = arr.map((item) => {
  //   return {
  //     sdfs: item.sdfsd,
  //   };
  // });
  modules: {
  },
});
