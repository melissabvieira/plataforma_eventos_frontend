<template>
  <div id="app">
    <header class="app-header">
      <h1>Sistema de Gestão de Eventos</h1>
      <nav>
        <router-link to="/" class="btn btn-outline-light btn-sm">Início</router-link>
        <router-link to="/eventos" class="btn btn-outline-light btn-sm">Eventos</router-link>
        <router-link to="/registrar-evento" class="btn btn-outline-light btn-sm">Cadastrar Evento</router-link>
        <router-link to="/grafico-eventos" class="btn btn-outline-light btn-sm">Dashboard</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      &copy; 2025 - TICKETMAIS. Todos os direitos reservados.
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

.app-header nav {
  margin-top: 0.rem;
}

.app-header nav .btn {
  margin: 0 0.3rem;
}

.app-main {
  padding: 2rem;
  min-height: 70vh;
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
