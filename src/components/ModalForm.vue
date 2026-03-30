<template>
  <div v-if="modelValue" class="Modal" @click.self="$emit('close')">
    <div class="Modal__content">
      <button @click="$emit('close')" class="Modal__close">&times;</button>
      <h3>{{ title }}</h3>
      <form @submit.prevent="onSubmit">
        <input v-model="name" @input="name=name.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g,'')" placeholder="Имя" required class="Modal__input">
        <input type="tel" v-model="phone" @input="phone=phone.replace(/\D/g,'').slice(0,11)" placeholder="79001234567" required class="Modal__input">
        <button type="submit" :disabled="phone.length!==11||name.length<2" class="Modal__btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['modelValue', 'title'])
const emit = defineEmits(['close', 'submit'])
const name = ref('')
const phone = ref('')

const onSubmit = () => {
  emit('submit', { name: name.value, phone: phone.value })
  name.value = ''
  phone.value = ''
}
</script>

<style scoped>
.Modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 100;
}

.Modal__content {
  background: var(--gradient-primary);
  padding: 32px 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  position: relative;
}

.Modal__close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.Modal__content h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.Modal__input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 14px;
}

.Modal__input::placeholder {
  color: rgba(255,255,255,0.5);
}

.Modal__btn {
  width: 100%;
  padding: 12px 24px;
  background: #fff;
  color: #4c1d95;
  border: none;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.Modal__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.Modal__btn:not(:disabled):hover {
  background: #7c3aed;
  color: #fff;
  transform: translateY(-2px);
}
</style>