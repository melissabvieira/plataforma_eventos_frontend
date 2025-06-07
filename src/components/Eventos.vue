<template>
  <div>
    <h1>Lista de Eventos</h1>
    <ul>
      <li v-for="evento in eventos" :key="evento.id">
        {{ evento.titulo }} - {{ evento.data }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventos: [],
    };
  },
  mounted() {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/v1/eventos`)
      .then(res => res.json())
      .then(data => {
        this.eventos = data;
      })
      .catch(err => {
        console.error('Erro ao buscar eventos:', err);
      });
  },
};
</script>
