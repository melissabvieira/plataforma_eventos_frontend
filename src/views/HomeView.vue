<template>
  <div class="home-view">
    <h2 class="title">Bem-vindo à Página Inicial</h2>
    <p class="description">
      Este é o Sistema de Eventos. Utilize o menu de navegação para acessar as funcionalidades disponíveis.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home-view {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.description {
  font-size: 1.1rem;
  color: #555;
}
</style>
