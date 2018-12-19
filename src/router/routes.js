export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        navType: 'store',
        hasNav: true
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        navType: 'store',
        hasNav: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]