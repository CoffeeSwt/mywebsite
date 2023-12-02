export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/pages/Blog/Blog.vue'),
  },
]
