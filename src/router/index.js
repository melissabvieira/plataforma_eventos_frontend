import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EventosList from '../components/EventosList.vue';
import RegistrarEvento from '@/views/RegistrarEvento.vue';
import GraficoEventos from '@/views/GraficoView.vue';

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
  { 
    path: '/registrar-evento',
    name: 'RegistrarEvento',
    component: RegistrarEvento 
  },
  { 
    path: '/grafico-eventos',
    name: 'GraficoEventos',
    component: GraficoEventos 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
