<script setup>
import { ref } from 'vue';
import {
  BacklogContainer,
  NewTask,
  TaskInput,
  AddButton,
  TaskList,
  TaskItem,
  RemoveButton
} from '@/style/StyledComponents';

const backlogItems = ref([
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
]);

const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    backlogItems.value.push({
      id: Date.now(),
      title: newTask.value.trim(),
    });
    newTask.value = '';
  }
};

const removeTask = (id) => {
  backlogItems.value = backlogItems.value.filter(item => item.id !== id);
};
</script>

<template>
  <BacklogContainer>
    <h2>Backlog</h2>
    <NewTask>
      <TaskInput v-model="newTask" placeholder="New task"/>
      <AddButton @click="addTask">Add</AddButton>
    </NewTask>
    <TaskList>
      <TaskItem v-for="item in backlogItems" :key="item.id">
        <span>{{ item.title }}</span>
        <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
      </TaskItem>
    </TaskList>
  </BacklogContainer>
</template>