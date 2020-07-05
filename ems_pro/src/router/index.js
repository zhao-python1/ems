import Vue from 'vue'
import Router from 'vue-router'
import Login_a from "../components/Login_a";
import Register_b from "../components/Register_b";
import Index from "../components/Index";
import Adds from "../components/Adds";
import Update from "../components/Update";
import Updates from "../components/Updates";


Vue.use(Router);

export default new Router({
  routes: [
    {
          path: '/',
          name:'Login_a',
          component:Login_a,
    },
    {
          path: '/login',
          name:'Login_a',
          component:Login_a,
    },
    {
          path: '/register',
          name:'Register_b',
          component:Register_b,
    },
    {
          path: '/index',
          name:'Index',
          component:Index,
    },
    {
          path: '/add',
          name:'Adds',
          component:Adds,
    },
    {
          path: '/update/:id',
          name:'Update',
          component:Update,
    },
    {
          path: '/updates/:id',
          name:'Updates',
          component:Updates,
    },

  ]
})
