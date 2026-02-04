<template>
  <header class="header">
    <div class="logo">
      <RouterLink to="/">
        <img src="/public/IMG_1729.svg" alt="Логотип фитнес-клуба" class="logo-img">
      </RouterLink>
    </div>

    <nav class="nav">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contact">Контакты</RouterLink>
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