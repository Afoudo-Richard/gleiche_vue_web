import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/frontEnd/HomeView.vue'
import MainView from '../views/frontEnd/MainView.vue'
import AboutView from '../views/frontEnd/AboutView.vue'
import NewsBlogsView from '../views/frontEnd/NewsBlogsView.vue'
import ContactView from '../views/frontEnd/ContactView.vue'
import LoginView from '../views/frontEnd/LoginView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: 'about',
          component: AboutView,
        },
        {
          path: 'news-blogs',
          component: NewsBlogsView,
        },
        {
          path: 'contact',
          component: ContactView,
        },
        {
          path: 'login',
          component: LoginView,
        },
      ]
    },
  ]
})

export default router
