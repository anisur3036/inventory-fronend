<template>
  <div class="h-screen">
    <div class="mx-auto h-full flex justify-center items-center bg-gray-200">
      <div class="w-96 bg-blue-900 rounded-lg shadow-xl p-6">
        <p class="text-center text-red-400" v-if="errors.result">
          {{ errors.result }}
        </p>
        <h1 class="text-white font-bold">Welcome back</h1>
        <p class="text-white my-2">Enter your credentials for login</p>
        <form @submit.prevent="signin">
          <div class="relative mb-2">
            <label
              for="email"
              class="pl-3 text-sm uppercase text-white absolute"
              >Email</label
            >
            <div>
              <input
                class="rounded pt-8 p-3 w-full bg-blue-800 outline-none text-white"
                type="text"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="youremail@app.com"
              />
            </div>
          </div>
          <div class="text-red-400 pl-3 pb-2" v-if="errors['email']">
            {{ errors['email'][0] }}
          </div>
          <div class="relative mb-2">
            <label
              for="password"
              class="pl-3 text-sm uppercase text-white absolute"
              >Password</label
            >
            <div>
              <input
                class="rounded pt-8 p-3 w-full bg-blue-800 outline-none text-white"
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="passwor"
              />
            </div>
          </div>
          <div class="text-red-400 pl-3 pb-2" v-if="errors['password']">
            {{ errors['password'][0] }}
          </div>
          <div>
            <button class="w-full bg-white rounded p-2" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <a href="/" class="text-white block text-center py-2"
          >Forgot Your Password?</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Login from '../layouts/Login.vue';

export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      errors: {}
    };
  },
  created() {
    this.$emit(`update:layout`, Login);
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    signin() {
      this.$Progress.start();
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: 'home'
          });
          this.$Progress.finish();
        })
        .catch(e => {
          this.errors = e.response.data.errors;
          this.$Progress.fail();
        });
    }
  }
};
</script>
