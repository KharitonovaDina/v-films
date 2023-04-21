<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
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
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form ref="loginForm">
          <v-text-field
            label="E-mail"
            :type="'email'"
            :rules="[rules.required, rules.email]"
          />
          <v-text-field
            label="Password"
            :append-icon="icon ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="icon ? 'text' : 'password'"
            @click:append="icon = !icon"
          />
          <PrimaryBtn title="Login" @click="submit" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'LoginDialog',
  components: { PrimaryBtn },
  data() {
    return {
      dialog: false,
      text: '',
      icon: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
    };
  },
  methods: {
    submit() {
      if (this.$refs.loginForm.validate()) {
        this.dialog = false;
        console.log('test');
      }
    },
  },
};
</script>

<style scoped>

</style>
