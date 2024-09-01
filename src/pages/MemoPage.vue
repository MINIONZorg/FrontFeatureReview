<script setup>
import { ref } from 'vue';
import { quillEditor } from 'vue3-quill';

const content = ref('');
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