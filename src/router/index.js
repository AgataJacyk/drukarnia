import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import AboutUs from '../components/ONas.vue'
import Offer from '../views/OfferView.vue'
import Contact from '../components/Kontakt.vue'
import NotFound from '../views/PageNotFound.vue'
import Cart from '../components/Koszyk.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
  { path: '/', component: HomePage },
  { path: '/AboutUs', component: AboutUs},
  { path: '/Contact', component: Contact},
  { path: '/Offer', component: Offer},
  { path: '/Cart', component: Cart},
  { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router