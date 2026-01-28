<template>
  <header class="header">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/contact">Контакты</router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background: #42b983;
  padding: 1rem;
  color: white;
}
nav { 
  display: flex; 
  gap: 1rem; 
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>с