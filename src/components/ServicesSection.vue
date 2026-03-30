<template>
  <section class="services-section">
    <div class="services-section__inner">
      <h2 class="section-heading">Почему InFlow?</h2>
      <p class="section-subheading">Мы создаём условия для вашего успеха</p>
      <div class="services-section__grid">
        <div v-for="(item, i) in services" :key="item.title" class="service-card">
          <div class="service-card__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <h3 class="service-card__title">{{ item.title }}</h3>
          <p class="service-card__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { title: 'Современный зал', text: '2000 м² площади с оборудованием премиум-класса от мировых брендов' },
  { title: 'Групповые занятия', text: 'Более 30 видов групповых программ каждую неделю для любого уровня' },
  { title: 'Персональный подход', text: 'Индивидуальные программы тренировок и питания от сертифицированных тренеров' },
  { title: 'Комфортные условия', text: 'Просторные раздевалки, сауна, зона отдыха и фитнес-бар' },
]
</script>

<style scoped>
.services-section {
  padding: 100px 24px;
  background: linear-gradient(160deg, #4c1d95, #6d28d9, #7c3aed);
  text-align: center;
}

.services-section__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  text-align: center;
}

.section-subheading {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin: 0 0 56px;
  text-align: center;
}

.services-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 40px 32px;
  border-radius: 20px;
  text-align: left;
  transition: background 0.3s ease, transform 0.3s ease;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
}

.service-card__number {
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(252, 251, 255, 0.4);
  margin-bottom: 12px;
  line-height: 1;
}

.service-card__title {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 10px;
  font-weight: 700;
}

.service-card__text {
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .services-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .services-section {
    padding: 64px 16px;
  }
}
</style>
