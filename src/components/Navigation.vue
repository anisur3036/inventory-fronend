<template>
  <nav class="flex items-center p-4 bg-blue-800 shadow">
    <template v-if="authenticated">
      <div class="flex-shrink">
        <router-link
          class="text-white hover:text-blue-500 pr-5"
          :to="{
            name: 'home'
          }"
          >Home</router-link
        >
        <router-link
          class="text-white hover:text-blue-500 pr-5"
          :to="{
            name: 'invoice'
          }"
          >Invoices</router-link
        >
        <router-link
          class="text-white hover:text-blue-500 pr-5"
          :to="{
            name: 'create'
          }"
          >Create Invoice</router-link
        >
        <router-link class="text-white hover:text-blue-500 pr-5" to="/about"
          >About</router-link
        >
      </div>
      <a
        class="flex-auto text-white hover:text-blue-500 pr-5"
        href="#"
        @click.prevent="signout"
        >Signout</a
      >
    </template>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signout'
    }),
    signout() {
      this.$Progress.start();
      this.signOutAction().then(() => {
        this.$router.replace({ name: 'signin' });
        this.$Progress.finish();
      });
    }
  }
};
</script>
