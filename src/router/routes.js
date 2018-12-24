import Home from '../views/Home.vue'
export default [
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
    component: () => import('../views/user/user.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'user dashboard',
        meta: {
          hasNav: true,
          displayName: 'dashboard'
        },
        component: () => import('../views/user/children/dashboard')
      },
      {
        path: 'listings',
        name: 'user listings',
        meta: {
          hasNav: true,
          displayName: 'listings'
        },
        component: () => import('../views/user/children/listings')
      },
      {
        path: 'events',
        name: 'user events',
        meta: {
          hasNav: true,
          displayName: 'events'
        },
        component: () => import('../views/user/children/events')
      },
      {
        path: 'virtual-collection',
        name: 'user collection',
        meta: {
          hasNav: true,
          displayName: 'virtual collection'
        },
        component: () => import('../views/user/children/virtual-collection')
      },
      {
        path: 'account-settings',
        name: 'user account settings',
        meta: {
          hasNav: true,
          displayName: 'account settings'
        },
        component: () => import('../views/user/children/account-settings')
      }
    ]
  },
]