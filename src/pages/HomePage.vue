<script setup>
import { defineComponent } from 'vue';
import CalendarComp from '@/components/CalendarComp.vue';

defineComponent({
  name: 'HomePage',
  components: { CalendarComp }
});
</script>

<template>
  <div>
    <CalendarComp/>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>