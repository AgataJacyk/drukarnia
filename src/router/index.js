import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import NotFound from '../views/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/', component: HomePage },
  { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router