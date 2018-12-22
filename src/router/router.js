import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/store'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        hasNav: true
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        hasNav: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      meta: {
        hasNav: true
      },
      beforeEnter(to, from, next) {
        let id = to.params.id;
        console.log(id);
        store.dispatch('getPageProduct', id).then(function() {
          next();
        });
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      meta: {
        hasNav: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user/user.vue')
    },
  ]
})
