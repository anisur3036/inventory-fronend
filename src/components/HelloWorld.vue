<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <form @submit.prevent="addLink">
      <input type="text" name="link" id="link" v-model="newLink" placeholder="Add a link">
      <button type="submit">Add Link</button>
    </form>
    <div class="nav">
      <ul>
        <li  v-for="(link, index) in links" :key="index">{{ link }} <button @click="revomeLink(index)" class="btn">❎</button></li>
      </ul>
    </div>
    <Status />
  </div>
</template>

<script>
import Status from '@/components/Status'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    Status
  },
  data() {
    return {
      newLink: '',
    }
  },
  computed: {
    ...mapGetters({
          title: 'gettitle',
          links: 'getlinks'
        })
  },
  methods: {
    ...mapMutations(['ADD_LINK']),
    ...mapActions(['removeLinks']),
    addLink() {
      this.ADD_LINK(this.newLink);
      this.newLink= ''
    },
    revomeLink(link) {
      this.removeLinks(link)
    }
  }
};
</script>
<style>
  ul, li {
    list-style: none;
  }
  .btn {
    border: 0;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
</style>