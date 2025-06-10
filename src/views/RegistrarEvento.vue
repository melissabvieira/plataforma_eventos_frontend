<template>
  <div class="container mt-4">
    <h2 class="mb-4">Registrar Evento</h2>

    <form @submit.prevent="registrarEvento">
      <div class="mb-3">
        <label for="tema" class="form-label">Tema</label>
        <input v-model="evento.tema" type="text" class="form-control" id="tema" required />
      </div>

      <div class="mb-3">
        <label for="descricao_evento" class="form-label">Descrição</label>
        <textarea v-model="evento.descricao_evento" class="form-control" id="descricao_evento" rows="3" required></textarea>
      </div>

      <div class="mb-3">
        <label for="data_evento" class="form-label">Data do Evento</label>
        <input v-model="evento.data_evento" type="datetime-local" class="form-control" id="data_evento" required />
      </div>

      <div class="mb-3">
        <label for="promotor" class="form-label">Promotor</label>
        <input v-model="evento.promotor" type="text" class="form-control" id="promotor" required />
      </div>

      <div class="mb-3">
        <label for="localizacao" class="form-label">Localização</label>
        <input v-model="evento.localizacao" type="text" class="form-control" id="localizacao" required />
      </div>

      <div class="mb-3">
        <label for="vagas_totais" class="form-label">Vagas Totais</label>
        <input v-model.number="evento.vagas_totais" type="number" class="form-control" id="vagas_totais" required />
      </div>

      <div class="mb-3">
        <label for="vagas_disponiveis" class="form-label">Vagas Disponiveis</label>
        <input v-model.number="evento.vagas_disponiveis" type="number" class="form-control" id="vagas_disponivel" required />
      </div>

      <button type="submit" class="btn btn-primary">Registrar Evento</button>
    </form>

    <div v-if="mensagem" class="alert alert-success mt-3">
      {{ mensagem }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistrarEvento',
  data() {
    return {
      evento: {
        tema: '',
        descricao_evento: '',
        data_evento: '',
        vagas_totais: '',
      },
      mensagem: ''
    };
  },
  methods: {
    async registrarEvento() {
    try {
      await axios.post('http://localhost:8989/api/v1/eventos', {
        ...this.evento,
        vagas_totais: this.evento.vagas_totais,
      });

      this.mensagem = 'Evento registrado com sucesso!';
      this.evento = {
        tema: '',
        descricao_evento: '',
        data_evento: '',
        vagas_totais: 0,
      };
    } catch (error) {
      console.error(error);
      alert('Erro ao registrar o evento.');
    }
  } 
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
