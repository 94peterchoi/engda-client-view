import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import OAuth2RedirectHandler from '@/views/OAuth2RedirectHandler.vue';
import ToastUiEditor from '@/views/ToastUiTest.vue';
import store from '@/vuex/store';
import {ACCESS_TOKEN} from '@/constants/loginInfo';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/oauth2/redirect',
      name: 'OAuth2RedirectHandler',
      component: OAuth2RedirectHandler,
    },
    {
      path: '/editor',
      name: 'ToastUiEditor',
      component: ToastUiEditor,
      meta: {
        roles: ['USER']
      }
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  await checkToken();
  const user = store.getters.getUser;

  if (to.meta.roles) {
    if (to.meta.roles.includes(user.role)) {      
      next();
    } else {
      console.log('로그인이 필요합니다.');
      next('/login')
    }
  } else {
    next();
  }
})

const checkToken = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    const options = {
      method: 'GET',
      headers: headers,
    }

    const response = await fetch('http://localhost:8080/user/me', options);
    const userInfo = await response.json();

    console.log('user info =>> ', userInfo);
    
    if (userInfo.id) {      
      store.commit('loginSuccess', userInfo);
    } else {
      localStorage.removeItem('accessToken');
      store.commit('logoutSuccess');
    }
  }
}

export default router
