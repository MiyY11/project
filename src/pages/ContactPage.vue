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
        <iframe src="https://yandex.ru/map-widget/v1/?ll=56.126568,40.404603&z=16" loading="lazy" width="100%" height="100%"></iframe>
      </div>
    </section>

    <section class="TwoBlocks">
      <div v-for="block in blocks" :key="block.title" class="Block">
        <h3>{{ block.title }}</h3>
        <p>{{ block.desc }}</p>
        <button @click="openModal(block.title)" class="BlockBtn">{{ block.btn }}</button>
      </div>
    </section>

    <ModalForm v-model="isModalOpen" :title="modalTitle" @close="isModalOpen = false" @submit="onSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ModalForm from '@/components/ModalForm.vue'

const workingHours = [
  { days: 'Понедельник – Пятница', hours: '08:00 – 23:00' },
  { days: 'Суббота – Воскресенье', hours: '10:00 – 20:00' }
]

const blocks = [
  { title: 'Связаться с нами', desc: 'Мы ждем каждого желающего стать частью нашего спортивного сообщества.', btn: 'Связаться' },
  { title: 'Работать у нас', desc: 'Мы в поиске ответственных сотрудников, готовых работать в нашей дружной команде.', btn: 'Откликнуться' }
]

const isModalOpen = ref(false)
const modalTitle = ref('')

const openModal = (title) => {
  modalTitle.value = title
  isModalOpen.value = true
}

const onSubmit = (data) => {
  alert(`Спасибо! Мы свяжемся с вами: +7 ${data.phone}`)
  isModalOpen.value = false
}
</script>

<style scoped>
.contact-page {
  background: var(--gradient-primary);
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
  color: var(--color-white);
}

.WorkingTime-box {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.WorkingTime-item {
  color: var(--color-white);
}

.WorkingTime-item span {
  margin-left: 8px;
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
  background: var(--bg-glass);
  padding: 20px;
  text-align: center;
  border-radius: 12px;
}

.AddressText h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--color-white);
}

.AddressText p {
  color: var(--color-white);
  margin: 4px 0;
}

.metro {
  font-size: 14px;
  opacity: 0.8;
  margin-top: 8px;
}

.ContactLink {
  color: var(--color-white);
  text-decoration: none;
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
  background: var(--bg-glass);
  padding: 24px;
  text-align: center;
  border-radius: 12px;
}

.Block h3 {
  font-size: 20px;
  color: var(--color-white);
  margin-bottom: 12px;
}

.Block p {
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.BlockBtn {
  padding: 12px 24px;
  background: var(--color-white);
  color: var(--color-primary);
  border: none;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.BlockBtn:hover {
  background: var(--color-primary-light);
  color: var(--color-white);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .MapAddressBlock,
  .TwoBlocks {
    flex-direction: column;
  }
  
  .MapSquare {
    width: 100%;
    height: 250px;
  }
}
</style>