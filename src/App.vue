<template>
  <div id="container">
    <component :is="layout">
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view :layout.sync="layout" />
        </transition>
        <vue-progress-bar></vue-progress-bar>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: `div`
    };
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      console.log(to.meta.progress, from.meta.progress);
      this.$Progress.finish();
    });
  }
};
</script>
