<template>
  <section class="directions">
    <div class="directions__inner">
      <h2 class="directions__title">Направления тренировок</h2>
      <p class="directions__subtitle">Выберите то, что подходит именно вам</p>
      
      <div class="directions__grid">
        <div v-for="item in directions" :key="item.title" class="card">
          <img :src="item.image" :alt="item.title" loading="lazy">
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">{{ item.text }}</p>
          <RouterLink :to="item.link" class="card__btn">Подробнее</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const directions = [
  { title: 'Кроссфит', text: 'Высокоинтенсивные функциональные тренировки', image: '/crossfit.jpg', link: '/directions/crossfit' },
  { title: 'Йога', text: 'Гармония тела и разума через асаны', image: '/yoga.jpg', link: '/directions/yoga' },
  { title: 'Бокс', text: 'Техника ударов и координация', image: '/boxing.jpg', link: '/directions/boxing' },
  { title: 'Силовые', text: 'Набор мышечной массы', image: '/strength.jpg', link: '/directions/strength' },
  { title: 'Танцы', text: 'Зумба, хип-хоп, контемпорари', image: '/dance.jpg', link: '/directions/dance' },
  { title: 'Кардио', text: 'Беговые дорожки и велотренажёры', image: '/cardio.jpg', link: '/directions/cardio' },
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
  color: var(--color-black);
  text-align: center;
  margin-bottom: 12px;
}

.directions__subtitle {
  color: var(--color-black);
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
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #ede9fe;
  will-change: transform;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card__title {
  font-size: 20px;
  font-weight: 700;
  color: #1e1b2e;
  padding: 24px 24px 8px;
}

.card__text {
  font-size: 14px;
  color: var(--color-black);
  padding: 0 24px;
}

.card__btn {
  display: inline-block;
  margin: 16px 24px 24px;
  padding: 12px 24px;
  background: var(--gradient-btn);
  color: var(--color-white);
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.card__btn:hover {
  transform: translateY(-4px);
}

@media (max-width: 900px) {
  .directions__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>