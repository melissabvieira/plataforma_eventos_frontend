<template>
  <div>
    <h3>Eventos por Local</h3>
    <BaseChart
      type="bar"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import BaseChart from './BaseChart.vue';
import axios from 'axios';

export default {
  components: { BaseChart },
  data() {
    return {
      rawData: [],
      chartData: {
        labels: [],
        datasets: [{
          label: 'Eventos',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/api/relatorios/eventos-por-tema');
        this.rawData = response.data;

        this.chartData.labels = this.rawData.map(item => item.tema);
        this.chartData.datasets[0].data = this.rawData.map(item => item.quantidade);

      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    },
  }
}
</script>

<style scoped>
/* ajuste o tamanho do gráfico */
div {
  height: 400px;
}
</style>
