<template>
  <div id="app">
    <header class="app-header">
      <h1>Meu Sistema de Eventos</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/eventos">Eventos</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      &copy; 2025 Minha Empresa
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app-header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
}

.app-header nav a {
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}

.app-header nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

.app-main {
  padding: 1rem;
  min-height: 70vh;
}

.app-footer {
  background-color: #eee;
  text-align: center;
  padding: 1rem;
}
</style>
