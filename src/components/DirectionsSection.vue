<template>
  <section class="directions">
    <div class="directions__inner">
      <h2 class="directions__title">Направления тренировок</h2>
      <p class="directions__subtitle">Выберите то, что подходит именно вам</p>
      
      <div class="directions__grid">
        <div v-for="item in directions" :key="item.title" class="card">
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
.directions {
  padding: 100px 24px;
  background: #faf8ff;
}

.directions__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.directions__title {
  font-size: 40px;
  font-weight: 800;
  color: #1e1b2e;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -0.16px;
}

.directions__subtitle {
  font-size: 17px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 56px;
}

.directions__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #fff;
  padding: 36px 28px;
  border-radius: 20px;
  border: 1px solid #ede9fe;
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
  border-color: #c4b5fd;
}

.card__title {
  font-size: 19px;
  font-weight: 700;
  color: #1e1b2e;
  margin-bottom: 10px;
}

.card__text {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .directions__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>