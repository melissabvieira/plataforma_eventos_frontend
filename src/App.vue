<template>
  <div id="app">
    <header class="app-header">
      <h1>Sistema de Gestão de Eventos</h1>
    </header>

    <main class="app-main">
      <div class="button-container">
        <router-link to="/" class="btn btn-outline-primary btn-lg">Início</router-link>
        <router-link to="/eventos" class="btn btn-outline-primary btn-lg">Eventos</router-link>
        <router-link to="/registrar-evento" class="btn btn-outline-primary btn-lg">Cadastrar Evento</router-link>
        <router-link to="/grafico-eventos" class="btn btn-outline-primary btn-lg">Dashboard</router-link>
      </div>

      <router-view />
    </main>

    <footer class="app-footer">
      &copy; 2025 - Minha Empresa. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-color: #f9f9f9;
}

.app-header {
  background-color: rgb(109, 56, 233);
  color: white;
  padding: 1rem;
  text-align: center;
}

.app-main {
  padding: 2rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.app-footer {
  background-color: #e0e0e0;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  margin-top: 2rem;
  border-top: 1px solid #ccc;
}
</style>
