import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchList from '../views/search/SearchList.vue'
import ClosestSearchList from '../views/search/ClosestSearchList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchList
    },
    {
      path: '/search/closest',
      name: 'search-closest',
      component: ClosestSearchList
    }
  ]
})

export default router
