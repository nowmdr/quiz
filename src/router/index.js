import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    children:[
      {
        path: '/quiz',
        name: 'Quiz',
        component: () => import('@/views/Quiz/Quiz.vue'),
      },
      {
        path: '/landing',
        name: 'Landing',
        component: () => import('@/components/pages/Landing/Landing.vue'),
      }
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
