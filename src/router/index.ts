import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import AppIndex from '../pages/AppIndex.vue'
import Books from '../pages/books/index.vue'
import Home from '../pages/home/index.vue'

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
    ],
  },
  // 他のルートをここに追加
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
