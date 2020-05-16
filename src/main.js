import Vue from 'vue';
import axios from 'axios';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import router from './router';
import store from './store';

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressBar, options);

// router.beforeEach((to, from, next) => {
//     // VueProgressBar.start()
//     next()
// })

require('@/store/subscriber');

axios.defaults.baseURL = 'http://localhost:8000';

Vue.config.productionTip = false;

Vue.filter('formatMoney', value => {
  return Number(value)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
});

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
