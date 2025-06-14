<template>
  <div>
    <h3>Eventos por Localização</h3>
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
          label: 'Eventos por Local',
          data: [],
          backgroundColor: 'rgba(255, 0, 0, 0.6)'
        }]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/relatorios/eventos-por-local`);
      
      const dadosLimpos = response.data.map(item => ({
        localizacao: item.localizacao.replace(/^"|"$/g, ''),
        quantidade: item.quantidade
      }));

      this.chartData.labels = dadosLimpos.map(item => item.localizacao);
      this.chartData.datasets[0].data = dadosLimpos.map(item => item.quantidade);
    } catch (error) {
      console.error('Erro ao carregar gráfico:', error);
    }
  }
}
</script>
