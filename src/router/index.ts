import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import AppIndex from '@/pages/AppIndex.vue'
import Books from '@/pages/books/Index.vue'
import Cv from '@/pages/cv/Index.vue'
import Home from '@/pages/home/Index.vue'
import Resume from '@/pages/resume/Index.vue'
import Study from '@/pages/study/Index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppIndex',
    component: AppIndex,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/books',
        name: 'Books',
        component: Books,
      },
      {
        path: '/cv',
        name: 'Cv',
        component: Cv,
      },
      {
        path: '/resume',
        name: 'Resume',
        component: Resume,
      },
      {
        path: '/study',
        name: 'Study',
        component: Study,
      },
    ],
  },
  // 他のルートをここに追加
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
