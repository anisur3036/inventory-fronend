<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation.vue';
export default {
  components: {
    Navbar
  }
};
</script>
