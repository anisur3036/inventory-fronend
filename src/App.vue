<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
      <router-view/>
      <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    components: {
      Navigation
    }
  }
</script>
<style>
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
