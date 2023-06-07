<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        text
        dark
      >
        Sign up
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Sign up</v-card-title>
      <v-card-text>
        <v-form ref="signUpForm">
          <v-text-field
            v-model="user.userName"
            label="Your name"
          />
          <v-text-field
            v-model="user.email"
            label="E-mail"
            type="email"
          />
          <v-text-field
            v-model="user.password"
            label="Password"
            :append-icon="icon ? 'mdi-eye' : 'mdi-eye-off'"
            :type="icon ? 'text' : 'password'"
            @click:append="icon = !icon"
          />
<!--          <v-text-field-->
<!--            label="Password again"-->
<!--            :append-icon="icon2 ? 'mdi-eye' : 'mdi-eye-off'"-->
<!--            :type="icon2 ? 'text' : 'password'"-->
<!--            @click:append="icon2 = !icon2"-->
<!--          />-->
          <v-btn @click="addUser">Click</v-btn>
          <PrimaryBtn @click="addUser" title="Sign up"/>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'SignUpDialog',

  components: { PrimaryBtn },

  data: () => ({
    dialog: false,
    icon: false,
    icon2: false,
    user: {
      userName: '',
      email: '',
      password: '',
      avatar: '',
    },
  }),

  // computed: {
  //   putUser() {
  //     return this.$store.commit('setUser');
  //   },
  // },
  //
  // created() {
  //   document.addEventListener('click', () => {
  //     this.$store.dispatch('addUser');
  //   });
  // },
  methods: {
    addUser() {
      this.$store.dispatch('addUser', JSON.stringify(this.user));
      console.log(this.user);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>

</style>
