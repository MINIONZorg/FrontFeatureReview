<script setup>
import { defineComponent } from 'vue';
import AppCalendar from '@/components/CalendarComp.vue';

defineComponent({
  name: 'HomePage',
  components: { AppCalendar }
});
</script>

<template>
  <div>
    <AppCalendar/>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>