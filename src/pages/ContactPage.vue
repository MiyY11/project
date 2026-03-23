<template>
  <div class="contact-page">
    <section class="WorkingTime">
      <h2>График работы</h2>
      <div class="WorkingTime-box">
        <div v-for="item in workingHours" :key="item.days" class="WorkingTime-item">
          <strong>{{ item.days }}:</strong>
          <span>{{ item.hours }}</span>
        </div>
      </div>
    </section>

    <section class="MapAddressBlock">
      <div class="AddressText">
        <h3>Наш адрес</h3>
        <p>г. Владимир, ул. Пушкарская, 46</p>
        <p class="metro">Остановка: "Дворец творчества юных"</p>
        <p><a href="tel:+79041234567" class="ContactLink">+7 (904) 123-45-67</a></p>
        <p><a href="mailto:InFlow@mail.ru" class="ContactLink">InFlow@mail.ru</a></p>
      </div>
      <div class="MapSquare">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=56.126568,40.404603&z=16&pt=56.126568,40.404603,pmrdm"
          loading="lazy"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>

    <section class="TwoBlocks">
      <div v-for="block in blocks" :key="block.title" class="Block">
        <h3>{{ block.title }}</h3>
        <p>{{ block.desc }}</p>
        <button class="BlockBtn">{{ block.btn }}</button>
      </div>
    </section>
  </div>
</template>

<script setup>
const workingHours = [
  { days: 'Понедельник – Пятница', hours: '08:00 – 23:00' },
  { days: 'Суббота – Воскресенье', hours: '10:00 – 20:00' }
]

const blocks = [
  { title: 'Связаться с нами', desc: 'Мы ждем каждого желающего стать частью нашего спортивного сообщества. Присоединяйтесь к нам!', btn: 'Связаться' },
  { title: 'Работать у нас', desc: 'Мы в поиске ответственных сотрудников, готовых работать в нашей дружной команде.', btn: 'Откликнуться' }
]
</script>

<style scoped>
.contact-page {
  background: linear-gradient(160deg, #4c1d95, #6126bf, #6e34d2);
  min-height: 100dvh;
  padding-bottom: 60px;
}

.WorkingTime {
  padding: 80px 20px 40px;
  text-align: center;
}

.WorkingTime h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.WorkingTime-box {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.WorkingTime-item {
  color: #fff;
}

.WorkingTime-item span {
  margin-left: 10px;
}

.MapAddressBlock {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.AddressText {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  text-align: center;
  border-radius: 12px;
}

.AddressText h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
}

.AddressText p {
  color: #fff;
  margin: 4px 0;
}

.metro {
  font-size: 14px;
  opacity: 0.8;
  margin-top: 8px;
}

.ContactLink {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin: 4px 0;
}

.ContactLink:hover {
  text-decoration: underline;
}

.MapSquare {
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
}

.TwoBlocks {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.Block {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  text-align: center;
  border-radius: 12px;
}

.Block h3 {
  font-size: 22px;
  color: #fff;
  margin: 0 0 16px;
}

.Block p {
  color: #cbd5e1;
  line-height: 1.5;
  margin: 0 0 24px;
}

.BlockBtn {
  background: #fff;
  color: #4c1d95;
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s;
}

.BlockBtn:hover {
  background: #a78bfa;
  color: #fff;
  transform: translateY(-2px);
}
</style>