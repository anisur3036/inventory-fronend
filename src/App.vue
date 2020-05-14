<template>
  <div id="app">
    <div id="nav">
    </div>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
      <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  export default {
    components: {
      //
    }
  }
</script>

