<script setup>
import { ref } from 'vue';
import { QuillEditor } from 'vue3-quill';

const content = ref('');
</script>

<template>
  <div>
    <h1>Memo Page</h1>
    <QuillEditor v-model="content" />
  </div>
</template>

<style scoped>
@import "~quill/dist/quill.snow.css";
</style>