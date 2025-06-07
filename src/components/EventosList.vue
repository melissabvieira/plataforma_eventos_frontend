<template>
  <div>
    <h2>Lista de Eventos</h2>
    <ul>
      <li v-for="evento in eventos" :key="evento._id">
        {{ evento.tema }} - {{ new Date(evento.data_evento).toLocaleDateString() }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventosList',
  data() {
    return {
      eventos: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8989/api/v1/eventos');
      this.eventos = response.data;
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  },
};
</script>
