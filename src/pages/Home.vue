<template>
  <div class="home">
    <h1>Добро пожаловать в наш фитнес-клуб InFlow!</h1>
    <p class="subtitle">Трансформируйте своё тело и улучшите здоровье с нами</p>
    
    <div class="blocks">
      <div class="block">
        <h2>💪 Тренажёрный зал</h2>
        <p>Современное оборудование для силовых тренировок</p>
      </div>
      <div class="block">
        <h2>🧘 Групповые занятия</h2>
        <p>Йога, пилатес, кроссфит и многое другое</p>
      </div>
      <div class="block">
        <h2>🏋️ Персональные тренировки</h2>
        <p>Индивидуальный подход от профессиональных тренеров</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
  margin: 2rem 0;
}
.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin: 1rem 0;
}
.blocks { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem; 
  margin-top: 2rem;
}
.block { 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem; 
  text-align: center; 
  border-radius: 12px;
  color: white;
}
.block h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.block p {
  opacity: 0.9;
}
</style>