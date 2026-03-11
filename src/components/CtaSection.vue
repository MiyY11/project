<template>
  <section class="cta-section">
    <div class="cta-section__inner">
      <h2 class="cta-section__title">Готовы начать?</h2>
      <p class="cta-section__text">Запишитесь на бесплатную пробную тренировку прямо сейчас</p>
      <RouterLink to="/contact" class="cta-section__button">Записаться бесплатно</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 80px 24px;
  background: linear-gradient(135deg, #1e1b2e, #2d2453);
  text-align: center;
}

.cta-section__inner {
  max-width: 600px;
  margin: 0 auto;
}

.cta-section__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 12px;
}

.cta-section__text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.05rem;
  margin: 0 0 36px;
  line-height: 1.5;
}

.cta-section__button {
  display: inline-block;
  padding: 16px 48px;
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.4);
}

.cta-section__button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.55);
}
</style>
