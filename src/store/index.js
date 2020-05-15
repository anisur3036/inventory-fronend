import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'This is my title',
    links: ['http://google.com', 'http://facebook.com', 'http://vuejs.org']
  },
  getters: {
    gettitle: state => {
      return state.title;
    },
    getlinks: state => {
      return state.links;
    },
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REVOME_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REVOME_ALL: state => {
      state.links = [];
    }
  },
  actions: {
    removeLinks: ({ commit }, payload) => {
      commit('REVOME_LINK', payload);
    },
    removeAll: ({ commit }) => {
      commit('REVOME_ALL');
    }
  },
  modules: {
    auth
  }
});
