import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/linux',
      name: 'linux',
      component: () => import('../views/Linux.vue')
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: () => import('../views/Conclusion.vue')
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('../views/Historia.vue')
    },
    {
      path: '/mxlinux',
      name: 'mxlinux',
      component: () => import('../views/Mxlinux.vue')
    },
    {
      path: '/software-libre',
      name: 'software-libre',
      component: () => import('../views/SoftLibre.vue')
    },
    {
      path: '/ubuntu',
      name: 'ubuntu',
      component: () => import('../views/Ubuntu.vue')
    },
    {
      path: '/supercomputadoras',
      name: 'supercomputadoras',
      component: () => import('../views/Supercomputadora.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
