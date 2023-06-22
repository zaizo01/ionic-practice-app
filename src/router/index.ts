import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import MyLife from '../views/MyLife.vue';
import About from '../views/About.vue';
import Moments from '../views/Moments.vue';
import Characters from '../views/Characters.vue';
import HireMe from '../views/HireMe.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/characters',
    component: Characters
  },
  {
    path: '/in-my-life',
    component: MyLife
  },
  {
    path: '/moments',
    component: Moments
  },
  {
    path: '/about',
    component:About
  },
  {
    path: '/hire-me',
    component:HireMe
  }
]
// Cristopher Zaiz Ortega, 2021-0949
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
