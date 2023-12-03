export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        //not '/blog'
        path: 'blog',
        name: 'blog',
        component: () => import('@/pages/Blog/Blog.vue'),
      },
    ],
  },
]
