<template>
  <div>
    <p>Count links: {{ countLinks }}</p>
    <button @click="remove_all">Remove All</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Status',
  computed: {
    ...mapGetters(['countLinks'])
  },
  methods: {
    ...mapActions(['removeAll']),
    remove_all() {
      this.removeAll();
    }
  }
};
</script>
