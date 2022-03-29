import Vue from 'vue'
import VueRouter from 'vue-router'

//import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView'
//import AuthLayout from '@/layouts/AuthLayout'
import UserLayout from '@/layouts/UserLayout'
//import GuestLayout from '@/layouts/GuestLayout'
import RegisterView from '@/views/RegisterView'
import EditTaskView from '@/views/EditTaskView'
import TasklistOverview from '@/views/TasklistOverview'

Vue.use(VueRouter)

const routes = [
  
   /*   
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView
      }
    ]
},
*/
{
  path: '/',
  name: 'login',
  component: LoginView
},

{
  path: '/login',
  name: 'login',
  component: LoginView
},

{
  path: '/register',
  name: 'register',
  component: RegisterView
},
  
{
  path: '/edit-task',
  name: 'editTask',
  component: EditTaskView
},
      
  {
    path: '/dashboard',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: TasklistOverview
      },
      {
        path: '/edit-task',
        name: 'editTask',
        component: EditTaskView
      }
    ],
    beforeEnter(to, from, next) {
      if(localStorage.getItem('jwt')) {
        return next();
      }
      next('/login')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
