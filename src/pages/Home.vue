<template>
  <div class="home">
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Добро пожаловать в наш фитнес-клуб InFlow!</h1>
        <p class="hero__subtitle">Трансформируйте своё тело и улучшите здоровье с нами</p>
      </div>
    </section>

    <section class="services">
      <div class="services__container">
        <div class="services__flex">
          <button class="service-card">
            <h2 class="service-card__title">Тренажёрный зал</h2>
            <p class="service-card__text">Современное оборудование для силовых тренировок</p>
          </button>
          
          <button class="service-card">
            <h2 class="service-card__title">Групповые занятия</h2>
            <p class="service-card__text">Йога, пилатес, кроссфит и многое другое</p>
          </button>
          
          <button class="service-card">
            <h2 class="service-card__title">Персональные тренировки</h2>
            <p class="service-card__text">Индивидуальный подход от профессиональных тренеров</p>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import './Home.css';
</style>