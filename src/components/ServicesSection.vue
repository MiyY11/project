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
  background: var(--gradient-primary);
  text-align: center;
}

.services-section__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-heading {
  font-size: 40px;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 12px;
}

.section-subheading {
  font-size: 16px;
  color: var(--color-text-muted);
  margin-bottom: 56px;
}

.services-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--bg-glass);
  padding: 40px 32px;
  border-radius: 20px;
  text-align: left;
  transition: 0.2s;
}

.service-card:hover {
  background: var(--bg-glass-hover);
  transform: translateY(-4px);
}

.service-card__number {
  font-size: 40px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 12px;
}

.service-card__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 8px;
}

.service-card__text {
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;
}

@media (max-width: 900px) {
  .services-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>