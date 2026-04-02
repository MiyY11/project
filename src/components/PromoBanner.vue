<template>
  <section class="promo">
    <h2 class="promo__title">Готовы начать?</h2>
    <p class="promo__text">Запишитесь на бесплатную пробную тренировку прямо сейчас</p>
    <RouterLink to="/contact" class="promo__btn">Записаться бесплатно</RouterLink>
  </section>
</template>

<style scoped>
.promo {
  padding: 80px 24px;
  background: linear-gradient(135deg, #1e1b2e, #2d2453);
  text-align: center;
}

.promo__title {
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
}

.promo__text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.promo__btn {
  display: inline-block;
  padding: 16px 48px;
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  color: #fff;
  font-weight: 600;
  border-radius: 32px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
  transition: all 0.2s;
}

.promo__btn:hover {
  transform: translateY(-2px);
}
</style>