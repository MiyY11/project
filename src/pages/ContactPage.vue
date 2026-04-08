<template>
  <div class="contact">
    <section class="schedule">
      <h2>График работы</h2>
      <div class="schedule-list">
        <div v-for="item in workingHours" :key="item.days" class="schedule-item">
          <strong>{{ item.days }}:</strong>
          <span>{{ item.hours }}</span>
        </div>
      </div>
    </section>

    <section class="contacts">
      <div class="info">
        <h3>Наш адрес</h3>
        <p>г. Владимир, ул. Пушкарская, 46</p>
        <p class="metro">Остановка: "Дворец творчества юных"</p>
        <p><a href="tel:+79041234567" class="link">+7 (904) 123-45-67</a></p>
        <p><a href="mailto:InFlow@mail.ru" class="link">InFlow@mail.ru</a></p>
      </div>
      <div class="map">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=56.126568,40.404603&z=16" loading="lazy" width="100%" height="100%"></iframe>
      </div>
    </section>

    <section class="actions">
      <div v-for="block in blocks" :key="block.title" class="card">
        <h3>{{ block.title }}</h3>
        <p>{{ block.desc }}</p>
        <button @click="openModal(block.title)" class="btn">{{ block.btn }}</button>
      </div>
    </section>

    <ModalForm v-model="isModalOpen" :title="modalTitle" @submit="onSubmit" />
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
  { title: 'Связаться с нами', desc: 'Мы ждем каждого желающего.', btn: 'Связаться' },
  { title: 'Работать у нас', desc: 'Мы в поиске сотрудников.', btn: 'Откликнуться' }
]

const isModalOpen = ref(false)
const modalTitle = ref('')

const openModal = (title) => {
  modalTitle.value = title
  isModalOpen.value = true
}

const onSubmit = ({ name, phone }) => {
  alert(`Спасибо, ${name}! Мы свяжемся с вами: +7 ${phone}`)
}
</script>

<style scoped>
.contact {
  background: var(--gradient-primary);
  min-height: 100dvh;
  padding-bottom: 60px;
}

.schedule {
  padding: 80px 20px 40px;
  text-align: center;
}

.schedule h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--color-white);
}

.schedule-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.schedule-item {
  color: var(--color-white);
}

.schedule-item span {
  margin-left: 8px;
}

.contacts {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.info {
  flex: 1;
  background: var(--bg-glass);
  padding: 20px;
  text-align: center;
  border-radius: 12px;
}

.info h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--color-white);
}

.info p {
  color: var(--color-white);
  margin: 4px 0;
}

.metro {
  font-size: 14px;
  opacity: 0.8;
  margin-top: 8px;
}

.link {
  color: var(--color-white);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.map {
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
}

.actions {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  background: var(--bg-glass);
  padding: 24px;
  text-align: center;
  border-radius: 12px;
}

.card h3 {
  font-size: 20px;
  color: var(--color-white);
  margin-bottom: 12px;
}

.card p {
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.btn {
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

.btn:hover {
  background: var(--color-primary-light);
  color: var(--color-white);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .contacts,
  .actions {
    flex-direction: column;
  }
  
  .map {
    width: 100%;
    height: 250px;
  }
}
</style>