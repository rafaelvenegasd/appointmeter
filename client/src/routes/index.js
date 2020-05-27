import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Offices from '../views/Offices.vue'
import Houses from '../views/Houses.vue'
import homeDetail from '../views/HomeDetail.vue'
import officeDetail from '../views/OfficeDetail.vue'
import createHome from '../views/user-profile/CreateHome.vue'
import createOffice from '../views/user-profile/CreateOffice.vue'
import updateProperty from '../views/user-profile/UpdateProperty.vue'
import Profile from '../views/user-profile/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/log-in',
    name: 'Login',
    component: Login, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/offices',
    name: 'Offices',
    component: Offices 

  },
  {
    path: '/homes',
    name: 'Houses',
    component: Houses 
  },
  {
    path: '/create-home',
    name: 'createHome',
    component: createHome
  },
  {
    path: '/create-office',
    name: 'createOffice',
    component: createOffice
  },
  {
    path: '/update-office',
    name: 'updateProperty',
    component: updateProperty 
  },
  {
    path: '/user-profile',
    name: 'Profile',
    component: Profile 
  },
  {
    path: '/home-detail',
    name: 'homeDetail',
    component: homeDetail 
  },
  {
    path: '/office-detail',
    name: 'officeDetail',
    component: officeDetail 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

function existToken() {
  return localStorage.getItem('access_token');
}

if (!(record => record.meta.isPublic) || !existToken()) {
    router.replace({ name: "Home" });
} 

export default router

