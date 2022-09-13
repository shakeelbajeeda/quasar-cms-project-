
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pricing', component: () => import('pages/pricing.vue') },
      { path: 'contact-us', component: () => import('pages/contact.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'UserDashboard', component: () => import('pages/UserDashboard.vue') },
      { path: 'AddListing', component: () => import('pages/AddListing.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
