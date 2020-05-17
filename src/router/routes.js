
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/quotes', component: () => import('pages/Quotes.vue') },
      { path: '/invoices', component: () => import('pages/Invoices.vue') },
      { path: '/export', component: () => import('pages/Export.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
