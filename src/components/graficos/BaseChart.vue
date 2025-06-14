<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'BaseChart',
  props: {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    data: {
      handler() {
        this.chart.destroy();
        this.renderChart();
      },
      deep: true,
    }
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: this.type,
        data: this.data,
        options: this.options,
      });
    },
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
  }
}
</script>
