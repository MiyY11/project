<template>
  <div class="about-page">
    <section class="about-page__hero">
      <h1 class="about-page__title">О нашем фитнес-клубе</h1>
    </section>

    <section class="about-page__content">
      <p>
        Мы — современный фитнес-клуб с многолетним опытом работы.
        Наша миссия — помочь каждому клиенту достичь своих целей в
        физическом развитии и улучшении здоровья.
      </p>

      <h2>Почему выбирают нас?</h2>
      <ul>
        <li>Профессиональные тренеры с международными сертификатами</li>
        <li>Современное оборудование последнего поколения</li>
        <li>Удобное расположение и комфортные условия</li>
        <li>Гибкий график работы: с 6:00 до 23:00</li>
        <li>Доступные цены и специальные предложения</li>
      </ul>

      <h2>Наши преимущества</h2>
      <p>
        В нашем клубе вы найдёте всё необходимое для эффективных
        тренировок: просторные залы, раздевалки с душевыми,
        сауну и зону отдыха. Мы создаём атмосферу, в которой
        хочется заниматься и достигать результатов!
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 72px;
}

.about-page__hero {
  background: linear-gradient(135deg, #4c1d95, #7c3aed);
  padding: 60px 40px;
  text-align: center;
}

.about-page__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.about-page__content {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px;
  color: #333;
  line-height: 1.7;
}

.about-page__content h2 {
  font-size: 1.5rem;
  color: #4c1d95;
  margin: 32px 0 16px;
}

.about-page__content p {
  margin: 0 0 16px;
}

.about-page__content ul {
  padding-left: 20px;
  margin: 0 0 16px;
}

.about-page__content li {
  margin-bottom: 8px;
}
</style>
