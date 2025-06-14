<template>
  <div class="container py-4">
    <h2 class="mb-4 text-center">Eventos</h2>

    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="evento in eventos"
        :key="evento.id"
      >
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title text-primary">{{ evento.tema }}</h5>
              <p class="card-text mb-1">
                <strong>Data:</strong> {{ formatarData(evento.data_evento) }}
              </p>
              <p class="card-text mb-3">
                <strong>Vagas disponíveis:</strong> {{ evento.vagas_disponiveis }}
              </p>
            </div>
            <div class="mt-auto d-flex justify-content-between">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="abrirModalVisualizar(evento.id)"
              >
                Visualizar
              </button>
              <button
                class="btn btn-success btn-sm"
                @click="abrirModal(evento.id)"
              >
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalVisualizar"
      tabindex="-1"
      aria-hidden="true"
      ref="modalVisualizar"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalhes do Evento</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>
          <div class="modal-body" v-if="eventoSelecionado">
            <p><strong>Tema:</strong> {{ eventoSelecionado.tema }}</p>
            <p><strong>Descrição:</strong> {{ eventoSelecionado.descricao_evento }}</p>
            <p><strong>Data:</strong> {{ formatarData(eventoSelecionado.data_evento) }}</p>
            <p><strong>Vagas disponíveis:</strong> {{ eventoSelecionado.vagas_disponiveis }}</p>
            <p><strong>Vagas totais:</strong> {{ eventoSelecionado.vagas_totais }}</p>
            <div class="d-flex justify-content-end mt-4">
              <button class="btn btn-danger" @click="deletarEvento">
                Excluir Evento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="inscricaoModal" tabindex="-1" aria-hidden="true" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Inscrição no Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="confirmarInscricao">
              <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" v-model="nome" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" required />
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success">Confirmar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as bootstrap from 'bootstrap';

export default {
  name: 'EventosList',
  data() {
    return {
      eventos: [],
      nome: '',
      email: '',
      eventoSelecionado: null,
      modalInstance: null,
      modalVisualizarInstance: null,
    };
  },
  async created() {
    await this.carregarEventos();
  },
  methods: {
    formatarData(data) {
      return new Date(data).toLocaleDateString();
    },
    async carregarEventos() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/eventos`);
        this.eventos = response.data;
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    },
    abrirModal(eventoId) {
      this.nome = '';
      this.email = '';
      this.eventoId = eventoId;
      if (!this.modalInstance) {
        const modalEl = this.$refs.modal;
        this.modalInstance = new bootstrap.Modal(modalEl);
      }
      this.modalInstance.show();
    },
    async abrirModalVisualizar(eventoId) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/eventos/${eventoId}`);
        this.eventoSelecionado = response.data;

        if (!this.modalVisualizarInstance) {
          const modalEl = this.$refs.modalVisualizar;
          this.modalVisualizarInstance = new bootstrap.Modal(modalEl);
        }

        this.modalVisualizarInstance.show();
      } catch (error) {
        console.error('Erro ao buscar detalhes do evento:', error);
      }
    },
    async deletarEvento() {
      if (!this.eventoSelecionado) return;

      const confirmacao = confirm('Tem certeza que deseja excluir este evento?');
      if (!confirmacao) return;

      try {
        await axios.delete(`${process.env.VUE_APP_API_BASE_URL}/eventos/${this.eventoSelecionado.id}`);
        alert('Evento excluído com sucesso.');
        this.modalVisualizarInstance.hide();
        await this.carregarEventos();
      } catch (error) {
        console.error('Erro ao excluir evento:', error);
        alert('Erro ao excluir evento.');
      }
    },
    async confirmarInscricao() {
      if (!this.nome || !this.email) {
        alert('Preencha todos os campos!');
        return;
      }

      try {
        await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}/eventos/${this.eventoId}/inscrever`,
          { nome: this.nome, email: this.email }
        );
        alert('Inscrição realizada com sucesso!');
        this.modalInstance.hide();
        await this.carregarEventos();
      } catch (error) {
        if (error.response?.data?.message) {
          alert(error.response.data.message);
        } else {
          console.error('Erro na inscrição:', error);
        }
      }
    },
  },
};
</script>
