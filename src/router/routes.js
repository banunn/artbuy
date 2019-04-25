import Home from '../views/Home.vue'
import store from '../store/store'
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
    path: '/artist/:id',
    name: 'artist',
    redirect: { name: 'artist-gallery' },
    meta: {
      hasNav: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/artist/artist.vue'),
    children: [
      {
        path: 'gallery',
        name: 'artist-gallery',
        meta: {
          hasNav: true,
          displayName: 'gallery'
        },
        component: () => import('../views/artist/children/gallery')
      },
    ]
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
        path: 'favorites',
        name: 'favorites',
        meta: {
          hasNav: true,
          displayName: 'favorites'
        },
        component: () => import('../views/user/children/favorites/favorites')
      },
      {
        path: 'social',
        name: 'userSocial',
        meta: {
          hasNav: true,
          displayName: 'social',
          hideLink: true
        },
        component: () => import('../views/user/children/social/social')
      },
      {
        path: 'dashboard',
        name: 'user dashboard',
        meta: {
          hasNav: true,
          displayName: 'feed'
        },
        component: () => import('../views/user/children/dashboard')
      },
      {
        path: 'listings',
        name: 'user listings',
        redirect: { name: 'view user listings' },
        meta: {
          hasNav: true,
          displayName: 'artwork'
        },
        component: () => import('../views/user/children/listings'),
        children: [
          { 
            path: '',
            name: 'view user listings',
            meta: {
              hasNav: true,
            },
            component: () => import('../views/user/children/listings/view')
          },
          {
            path: 'create',
            name: 'create listing',
            meta: {
              hasNav: true,
            },
            component: () => import('../views/user/children/listings/create')
          }
        ]
      },
      {
        path: 'events',
        name: 'user events',
        redirect: { name: 'view user events' },
        meta: {
          hasNav: true,
          displayName: 'events'
        },
        component: () => import('../views/user/children/events'),
        children: [
          {
            path: '',
            name: 'view user events',
            meta: {
              hasNav: true,
            },
            component: () => import('../views/user/children/events/view')
          },
          {
            path: 'create',
            name: 'create event',
            meta: {
              hasNav: true,
            },
            component: () => import('../views/user/children/events/create')
          }
        ]
      },
      {
        path: 'order-history',
        name: 'order history',
        meta: {
          hasNav: true,
          displayName: 'order history'
        },
        component: () => import('../views/user/children/order-history')
      },
    /*  {
        path: 'virtual-collection',
        name: 'user collection',
        meta: {
          hasNav: true,
          displayName: 'virtual collection'
        },
        component: () => import('../views/user/children/virtual-collection')
      }, */
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
  {
    path: '/event/:id',
    name: 'event',
    redirect: '/event/:id/discussion',
    meta: {
      hasNav: true
    },
    component: () => import('../views/event.vue'),
    children: [
      {
        path: 'discussion',
        name: 'event discussion',
        meta: {
          hasNav: true,
          displayName: 'Discussion'
        },
        component: () => import('../components/event/discussion')
      },
      {
        path: 'photos',
        name: 'event photos',
        meta: {
          hasNav: true,
          displayName: 'Photos'
        },
        component: () => import('../components/event/event-photos')
      },
    ]
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    meta: {
      hasNav: true
    },
    component: () => import('../views/onboarding/onboarding'),
    children: [
      {
        path: 'welcome',
        name: 'onboarding welcome',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/welcome')
      },
      {
        path: 'plan',
        name: 'onboarding plan',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/plan')
      },
      {
        path: 'payment',
        name: 'onboarding payment',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/payment')
      },
      {
        path: 'password-reset-request',
        name: 'password reset request',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/forgot-password-request')
      },
      {
        path: 'password-reset',
        name: 'password reset',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/forgot-password')
      },
      {
        path: 'password-reset check',
        name: 'password reset check',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/onboarding/children/forgot-password-check')
      },
    ]
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      hasNav: true
    },
    component: () => import('../views/checkout/checkout'),
    children:[
      {
        path: '',
        name: 'checkout customer information',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/checkout/children/customer-info')
      },
      {
        path: 'shipping-method',
        name: 'checkout shipping method',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/checkout/children/shipping-method')
      },
      {
        path: 'payment-method',
        name: 'checkout payment method',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/checkout/children/payment-method')
      },
      {
        path: 'complete',
        name: 'checkout complete',
        meta: {
          hasNav: true,
        },
        component: () => import('../views/checkout/children/complete')
      },
    ]
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: () => import('../views/terms-and-conditions.vue'),
    meta: {
      hasNav: true,
      pageName: 'Terms & Conditions'
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/privacy.vue'),
    meta: {
      hasNav: true,
      pageName: 'Privacy Policy'
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/faq.vue'),
    meta: {
      hasNav: true,
      pageName: "FAQ's"
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue'),
    meta: {
      hasNav: true,
      pageName: 'Contact Us'
    },
  },
]