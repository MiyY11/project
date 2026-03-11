<template>
  <section class="hero-section">
    <div class="hero-section__overlay"></div>
    <div class="hero-section__content">
      <span class="hero-section__badge">Фитнес-клуб</span>
      <h1 class="hero-section__title">Добро пожаловать<br>в <span class="hero-section__accent">InFlow</span>!</h1>
      <p class="hero-section__subtitle">Трансформируйте своё тело и улучшите здоровье вместе с профессионалами</p>
      <div class="hero-section__actions">
        <RouterLink to="/contact" class="hero-section__cta">Записаться</RouterLink>
        <RouterLink to="/about" class="hero-section__cta hero-section__cta--outline">Узнать больше</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/background.jpg') center/cover no-repeat;
  margin-top: -72px;
  padding-top: 72px;
}

.hero-section__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(77, 29, 149, 0.075) 0%,
    rgba(30, 27, 46, 0.5) 40%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.hero-section__content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  max-width: 800px;
}

.hero-section__badge {
  display: inline-block;
  padding: 6px 20px;
  background: rgba(167, 139, 250, 0.25);
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 50px;
  color: #fefeff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-section__title {
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-section__accent {
  background: linear-gradient(135deg, #a78bfa, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-section__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px;
  line-height: 1.6;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.hero-section__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-section__cta {
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.4);
}

.hero-section__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.5);
}

.hero-section__cta--outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: none;
}

.hero-section__cta--outline:hover {
  border-color: #fff;
  box-shadow: none;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 640px) {
  .hero-section {
    min-height: 90dvh;
  }
}
</style>
