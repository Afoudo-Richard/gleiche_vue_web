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
import NewsBlogDetailView from '../views/frontEnd/NewsBlogDetailView.vue'
import UpcomingEventsView from '../views/frontEnd/UpcomingEventsView.vue'



// Back End

import AccountView from '../views/backEnd/AccountView.vue'
import DashboardView from '../views/backEnd/DashboardView.vue'


import { useUserStore } from '@/stores/user'
import { useExecutivesStore } from '@/stores/executives'
import { useVolunteerStore } from '@/stores/volunteers'




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
          path: 'detail/:title/:id',
          name: 'news_details',
          component: NewsBlogDetailView
        },
        {
          path: 'news-blogs',
          component: NewsBlogsView,
        },
        {
          name: 'executives',
          path: 'executives',
          component: ExecutivesView,
          // beforeEnter: async (to, from) => {
          //   const executivesStore = useExecutivesStore()
          //   await executivesStore.getExecutives();

          //   return true
          // },
        },
        {
          path: 'volunteers',
          name: 'volunteers',
          component: VolunteersView,
          // beforeEnter: async (to, from) => {
          //   console.log("%%%%%%%%%%%%%%% inside before enter voluteers route &&&&&&&&")
          //   const volunteersStore = useVolunteerStore()
          //   await volunteersStore.getVolunteers1()
          //   console.log(volunteersStore.volunteers.length)
          //   return true
          // },
        },
        {
          path: 'upcoming-events',
          name: 'upcoming-events',
          component: UpcomingEventsView,
          // beforeEnter: async (to, from) => {
          //   console.log("%%%%%%%%%%%%%%% inside before enter voluteers route &&&&&&&&")
          //   const volunteersStore = useVolunteerStore()
          //   await volunteersStore.getVolunteers1()
          //   console.log(volunteersStore.volunteers.length)
          //   return true
          // },
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

router.beforeEach(async (to, from, next) => {

  // console.log(`To path name ${to.path}`)
  // const volunteersStore = useVolunteerStore()


  // switch (to.path) {
  //   case '/':
  //     console.log("%%%%%%%%%%%%%%% inside before enter voluteers route &&&&&&&&")
  //     await volunteersStore.getVolunteers(4)
  //     break;
  //   case '/volunteers':
  //     console.log("%%%%%%%%%%%%%%% inside before enter voluteers route &&&&&&&&")
  //     await volunteersStore.getVolunteers()
  //     break;

  //   default:
  //     break;
  // }

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
