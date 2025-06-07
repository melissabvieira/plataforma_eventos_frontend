import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EventosList from '../components/EventosList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: EventosList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
