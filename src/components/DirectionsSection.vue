<template>
  <section class="directions-section">
    <div class="directions-section__inner">
      <h2 class="section-heading">Направления тренировок</h2>
      <p class="section-subheading">Выберите то, что подходит именно вам</p>
      <div class="directions-section__grid">
        <div v-for="item in directions" :key="item.title" class="direction-card">
          <h3 class="direction-card__title">{{ item.title }}</h3>
          <p class="direction-card__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const directions = [
  { title: 'Кроссфит', text: 'Высокоинтенсивные функциональные тренировки для развития силы и выносливости' },
  { title: 'Йога', text: 'Гармония тела и разума через асаны, дыхательные практики и медитацию' },
  { title: 'Бокс', text: 'Освойте технику ударов и улучшите координацию под руководством опытных тренеров' },
  { title: 'Силовые тренировки', text: 'Современное оборудование и программы для набора мышечной массы' },
  { title: 'Танцы', text: 'Зумба, хип-хоп, контемпорари — двигайтесь в ритме и сжигайте калории' },
  { title: 'Кардио', text: 'Беговые дорожки, велотренажёры и эллипсы для укрепления сердечно-сосудистой системы' },
]
</script>

<style scoped>
.directions-section {
  padding: 100px 24px;
  background: #faf8ff;
}

.directions-section__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #1e1b2e;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  text-align: center;
}

.section-subheading {
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0 0 56px;
  text-align: center;
}

.directions-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.direction-card {
  background: #fff;
  padding: 36px 28px;
  border-radius: 20px;
  border: 1px solid #ede9fe;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.direction-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
  border-color: #c4b5fd;
}

.direction-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e1b2e;
  margin: 0 0 10px;
}

.direction-card__text {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .directions-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .directions-section {
    padding: 64px 16px;
  }

  .directions-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
