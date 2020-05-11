import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '6px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

require ('@/store/subscriber');

axios.defaults.baseURL = "http://localhost:8000/api";

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
	new Vue({
	  router,
	  store,
	  render: h => h(App)
	}).$mount("#app");
})

