import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMq from 'vue-mq'
import VueSlimScroll from 'vue-slimscroll'
import routes from './routes/routes'
import './assets/scss/app.scss'
import { LineChart } from "./components/charts/charts";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { TweetForm } from "./components/helo.vue";
// Globally register your component
Vue.component('TweetForm', TweetForm);



//Tags 
//https://github.com/voerro/vue-tagsinput


Vue.use(ElementUI);

import VoerroTagsInput from '@voerro/vue-tagsinput'
Vue.component('tags-input', VoerroTagsInput);
import '@voerro/vue-tagsinput/dist/style.css'


import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSlimScroll);
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 750,
    lg: Infinity,
  }
});




Vue.config.productionTip = false



const router = new VueRouter({routes })



window.vm = new Vue({
  render: h => h(App),
  router,
  component: {
    LineChart
  },
  beforeCreate: function() {
    // const el = document.body;
    // this.toggleClass(el, 'sidebar-mini');
    // this.toggleClass(el, 'sidebar-collapse');
    document.body.className = 'sidebar-mini sidebar-collapse';
},
  methods: {
    totalCounter() {
      alert("hi");
    }
  }
}).$mount('#app')
