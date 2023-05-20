import { createRouter, createWebHistory } from 'vue-router'

// Front End
import HomeView from '../views/frontEnd/HomeView.vue'
import MainView from '../views/frontEnd/MainView.vue'
import AboutView from '../views/frontEnd/AboutView.vue'
import NewsBlogsView from '../views/frontEnd/NewsBlogsView.vue'
import ContactView from '../views/frontEnd/ContactView.vue'
import LoginView from '../views/frontEnd/LoginView.vue'
import ExecutivesView from '../views/frontEnd/ExecutivesView.vue'
import VolunteersView from '../views/frontEnd/VolunteersView.vue'

// Back End

import AccountView from '../views/backEnd/AccountView.vue'
import DashboardView from '../views/backEnd/DashboardView.vue'


import { useUserStore } from '@/stores/user'


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
          name: 'executives',
          path: 'executives',
          component: ExecutivesView,
        },
        {
          path: 'volunteers',
          component: VolunteersView,
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

    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: {
        requireLogin: true
      },
      children: [
        {
          path: '',
          component: DashboardView,
        },
        // {
        //   path: 'templates',
        //   component: TemplatesView,
        // },
        // {
        //   path: 'add-template',
        //   component: AddTemplateView,
        // },
        // {
        //   name: 'edit-template',
        //   path: 'edit-template/:id',
        //   component: AddTemplateView,
        // },
        // {
        //   path: 'profile',
        //   component: ProfileView,
        // },
        // {
        //   path: 'settings',
        //   component: SettingsView,
        // },
        // {
        //   path: 'privacy_policy',
        //   component: PrivacyPolicyView,
        // },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requireLogin && !userStore.is_authenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
})


export default router
