<script setup>
import { defineComponent } from 'vue';
import AppCalendar from '@/components/AppCalendar.vue';

defineComponent({
  name: 'HomePage',
  components: { AppCalendar }
});
</script>

<template>
  <div>
    <h1>Home</h1>
    <AppCalendar/>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>