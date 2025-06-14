<template>
  <div class="grafico-container">
    <h1>Relatórios e Gráficos</h1>
    
    <section class="grafico-item">
      <EventosPorLocal />
    </section>
    
    <section class="grafico-item">
      <EventosPorTema />
    </section>
    
    <section class="grafico-item">
      <EventosPorMes />
    </section>
    
    <section class="grafico-item">
      <EventosPorPromotor />
    </section>
    
    <section class="grafico-item">
      <EventosPorVagas />
    </section>
  </div>
</template>

<script>
import EventosPorLocal from '../components/graficos/EventosPorLocal.vue';
import EventosPorTema from '../components/graficos/EventosPorTema.vue';
import EventosPorMes from '../components/graficos/EventosPorMes.vue';
import EventosPorPromotor from '../components/graficos/EventosPorPromotor.vue';
import EventosPorVagas from '../components/graficos/EventosPorVagas.vue';

export default {
  name: 'GraficoView',
  components: {
    EventosPorLocal,
    EventosPorTema,
    EventosPorMes,
    EventosPorPromotor,
    EventosPorVagas,
  }
}
</script>

<style scoped>
.grafico-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.grafico-item {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  min-height: 400px;
}
</style>
