<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import Layout from '@/layouts/Default.vue';

export default {
  // components: {
  //   Navigation
  // },
  created() {
    this.$emit(`update:layout`, Layout);
  }
};
</script>
