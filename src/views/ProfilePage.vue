<template>
  <v-container class="profile">
    <v-form>
      <span>Имя</span>
      <v-text-field
        value="userName"
        solo
      />
      <span>E-mail</span>
      <v-text-field
        value="email"
        solo
      />
      <span>Password</span>
      <v-text-field
        value="pass"
        solo
      />
      <v-btn
        text
        color="red"
        @click="deleteUser"
      >
        Удалить аккаунт
      </v-btn>
    </v-form>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <span>Аккаунт удален</span>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',

  data: () => ({
    dialog: false,
  }),

  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    deleteUser() {
      this.$store.dispatch('deleteUser', this.user.userId);
      this.dialog = true;
      setTimeout(() => {
        this.dialog = false;
      }, 3000);
    },
  },
};
</script>
