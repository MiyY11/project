<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    
    <div class="hero__content">
      <span class="hero__badge">Фитнес-клуб</span>
      <h1 class="hero__title">
        Добро пожаловать<br>в <span class="hero__accent">InFlow</span>!
      </h1>
      <p class="hero__text">Трансформируйте своё тело и улучшите здоровье вместе с профессионалами</p>
      
      <div class="hero__actions">
        <RouterLink to="/contact" class="hero__btn hero__btn--primary">Записаться</RouterLink>
        <RouterLink to="/about" class="hero__btn hero__btn--outline">Узнать больше</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/background.jpg') center/cover;
  margin-top: -72px;
  padding-top: 72px;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(77, 29, 149, 0.075), rgba(0, 0, 0, 0.6));
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  max-width: 800px;
}

.hero__badge {
  display: inline-block;
  padding: 6px 20px;
  background: rgba(167, 139, 250, 0.25);
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 50px;
  color: #fefeff;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero__title {
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.1;
  letter-spacing: -0.32px;
}

.hero__accent {
  background: linear-gradient(135deg, #a78bfa, #c084fc);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__btn {
  display: inline-block;
  padding: 16px 40px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.32px;
  transition: all 0.2s;
}

.hero__btn--primary {
  background: linear-gradient(135deg, #7c3aed, #9333ea);
  color: #fff;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.4);
}

.hero__btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.5);
}

.hero__btn--outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.hero__btn--outline:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

</style>