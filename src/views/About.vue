<template>
  <div class="about">
    <!-- <Navigation /> -->
    <h1>About</h1>
    <template v-if="user">
      <p>Hi, {{ user.name }}</p>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Layout from '@/layouts/Default.vue';

export default {
  components: {
    //
  },
  created() {
    this.$emit(`update:layout`, Layout);
  },
  computed: {
    ...mapGetters({
      auth: 'auth/authenticated',
      user: 'auth/user'
    })
  }
};
</script>
