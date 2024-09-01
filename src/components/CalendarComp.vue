<script setup>
import {ref} from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import BookingModal from '@/components/BookModal.vue';

const events = ref([]);
const bookingModalRef = ref(null);

const createEvent = ({start, end}) => {
  const title = prompt('Event title:');
  if (title) {
    events.value.push({start, end, title});
  }
};

const openModal = () => {
  bookingModalRef.value.openModal();
};
</script>

<template>
  <div>
    <h1>Calendar</h1>
    <button @click="openModal">Add Event</button>
    <VueCal :events="events" @cell-click="createEvent" id="calendar"/>
    <BookingModal ref="bookingModalRef"/>
  </div>
</template>

<style scoped>
@import 'vue-cal/dist/vuecal.css';

#calendar{
  height: 80vh;
  box-sizing: border-box;
  overflow: auto;
}
</style>