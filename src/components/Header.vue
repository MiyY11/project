<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="/public/IMG_1729.svg" alt="Логотип фитнес-клуба" class="logo-img">
      </router-link>
    </div>

    <nav class="nav">
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
  display: flex;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
}

.logo {
  margin-right: auto;
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.nav a {
  color: black;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}
</style>