<template>
  <header class="app-header">
    <div class="app-header__logo">
      <RouterLink to="/">
        <img src="/IMG_1729.svg" alt="Логотип фитнес-клуба" class="app-header__logo-img">
      </RouterLink>
    </div>

    <nav class="app-header__nav">
      <RouterLink to="/" class="app-header__link">Главная</RouterLink>
      <RouterLink to="/about" class="app-header__link">О нас</RouterLink>
      <RouterLink to="/contact" class="app-header__link">Контакты</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 16px 48px;
  background: rgba(30, 27, 46, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.app-header__logo {
  margin-right: auto;
}

.app-header__logo-img {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
}

.app-header__nav {
  display: flex;
  gap: 36px;
}

.app-header__link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.app-header__link:hover {
  color: #fff;
  border-bottom-color: rgba(167, 139, 250, 0.5);
}

.app-header__link.router-link-exact-active {
  color: #fff;
  border-bottom-color: #a78bfa;
}
</style>
