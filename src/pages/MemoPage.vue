<script setup>
import { ref, onMounted, watch } from 'vue';
import { quillEditor } from 'vue3-quill';

const content = ref('');
const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'init' || data.type === 'update') {
    content.value = data.content;
  }
};

watch(content, (newContent) => {
  ws.send(JSON.stringify({ type: 'update', content: newContent }));
});

onMounted(() => {
  // Handle WebSocket connection open
  ws.onopen = () => {
    console.log('WebSocket connection established');
  };
});
</script>

<template>
  <div>
    <h1>Memo Page</h1>
    <quillEditor v-model="content" />
  </div>
</template>

<style scoped>
@import "~quill/dist/quill.snow.css";
</style>