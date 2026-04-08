<template>
  <div v-if="props.modelValue" class="modal" @click.self="close">
    <div class="modal__content">
      <button class="modal__close" @click="close">&times;</button>
      <h3>{{ props.title }}</h3>
      <form @submit.prevent="submit">
        <input
          v-model="form.name"
          @input="form.name = form.name.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, '')"
          class="modal__input"
          placeholder="Имя"
          required
        >
        <input
          v-model="form.phone"
          @input="form.phone = form.phone.replace(/\D/g, '').slice(0, 11)"
          class="modal__input"
          placeholder="79001234567"
          type="tel"
          required
        >
        <button class="modal__btn" :disabled="!isValid" type="submit">
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: String
})

const emit = defineEmits(['update:modelValue', 'submit'])

const form = reactive({ name: '', phone: '' })

const isValid = computed(() =>
  form.phone.length === 11 && form.name.length >= 2 && !/\d/.test(form.name)
)

const close = () => {
  emit('update:modelValue', false)
  form.name = ''
  form.phone = ''
}

const submit = () => {
  if (!isValid.value) return
  emit('submit', { ...form })
  close()
}
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1;
}

.modal__content {
  background: var(--gradient-primary);
  padding: 32px 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  position: relative;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.modal__content h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.modal__input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 14px;
}

.modal__input::placeholder {
  color: rgba(255,255,255,0.5);
}

.modal__btn {
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

.modal__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal__btn:not(:disabled):hover {
  background: #7c3aed;
  color: #fff;
  transform: translateY(-2px);
}
</style>