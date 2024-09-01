<script setup>
import {ref, defineExpose} from 'vue';

const isOpen = ref(false);
const start = ref('');
const end = ref('');
const title = ref('');

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const bookEvent = () => {
  if (start.value && end.value && title.value) {
    console.log('Event booked:', {start: start.value, end: end.value, title: title.value});
    closeModal();
  }
};

defineExpose({openModal, closeModal});
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h1>Book an Event</h1>
      <form @submit.prevent="bookEvent">
        <div>
          <label for="start">Start Date (YYYY-MM-DD HH:mm):</label>
          <input id="start" v-model="start" type="date" required/>
        </div>
        <div>
          <label for="end">End Date (YYYY-MM-DD HH:mm):</label>
          <input id="end" v-model="end" type="date" required/>
        </div>
        <div>
          <label for="title">Event Title:</label>
          <input id="title" v-model="title" required/>
        </div>
        <button type="submit">Book Event</button>
      </form>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2em;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}
</style>