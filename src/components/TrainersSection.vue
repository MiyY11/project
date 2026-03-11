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
  background: #fff;
}

.trainers-section__inner {
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

.trainers-section__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.trainer-card {
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  background: #faf8ff;
  border: 1px solid #ede9fe;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.trainer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(124, 58, 237, 0.12);
}

.trainer-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.trainer-card__name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e1b2e;
  margin: 0 0 6px;
}

.trainer-card__role {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  color: #7c3aed;
  background: #ede9fe;
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 14px;
}

.trainer-card__bio {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .trainers-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .trainers-section {
    padding: 64px 16px;
  }

  .trainers-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
