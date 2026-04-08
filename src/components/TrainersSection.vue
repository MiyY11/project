<template>
  <section class="trainers-section">
    <div class="trainers-section__inner">
      <h2 class="section-heading">Наши тренеры</h2>
      <p class="section-subheading">Профессионалы с международными сертификатами</p>
      <div class="trainers-section__grid">
        <div v-for="trainer in trainers" :key="trainer.name" class="trainer-card">
          <div class="trainer-card__avatar">{{ trainer.initials }}</div>
          <h3 class="trainer-card__name">{{ trainer.name }}</h3>
          <span class="trainer-card__role">{{ trainer.role }}</span>
          <p class="trainer-card__bio">{{ trainer.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trainers = [
  {
    initials: 'АВ',
    name: 'Александрова Виктория',
    role: 'Йога и пилатес',
    bio: 'Сертифицированный инструктор с 8-летним опытом. Специализация — восстановительная йога и дыхательные практики.',
  },
  {
    initials: 'ГЕ',
    name: 'Гогина Елена',
    role: 'Кроссфит и функциональный тренинг',
    bio: 'Мастер спорта. Подготовила более 200 клиентов к соревнованиям различного уровня.',
  },
  {
    initials: 'УВ',
    name: 'Удалая Валерия',
    role: 'Силовые тренировки',
    bio: 'Персональный тренер с фокусом на бодибилдинг и коррекцию фигуры. 6 лет опыта.',
  },
  {
    initials: 'СА',
    name: 'Свириденко Анна',
    role: 'Танцы и кардио',
    bio: 'Хореограф и фитнес-инструктор. Энергичные занятия, которые заряжают мотивацией.',
  },
]
</script>

<style scoped>
.trainers-section {
  padding: 100px 24px;
  background: var(--gradient-primary);
  text-align: center;
}

.trainers-section__inner {
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
  color: var(--color-text-muted);
  margin-bottom: 56px;
}

.trainers-section__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.trainer-card {
  background: var(--bg-glass);
  padding: 32px 24px;
  border-radius: var(--radius-md);
  text-align: center;
  transition: 0.3s;
}

.trainer-card:hover {
  background: var(--bg-glass-hover);
  transform: translateY(-6px);
}

.trainer-card__avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: var(--color-primary-light);
  border: 2px solid var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-white);
}

.trainer-card:hover .trainer-card__avatar {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.trainer-card__name {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 8px;
}

.trainer-card__role,
.trainer-card__bio {
  color: var(--color-text-muted);
  font-size: 14px;
}

.trainer-card__role {
  margin-bottom: 12px;
}

.trainer-card__bio {
  margin: 0;
}

@media (max-width: 900px) {
  .trainers-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>