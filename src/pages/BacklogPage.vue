<script setup>
import { ref } from 'vue';
import { DndProvider } from 'vue3-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'in-progress' },
]);

const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    backlogItems.value.push({
      id: Date.now(),
      title: newTask.value.trim(),
      status: 'todo',
    });
    newTask.value = '';
  }
};

const removeTask = (id) => {
  backlogItems.value = backlogItems.value.filter(item => item.id !== id);
};

const changeStatus = (id, status) => {
  const task = backlogItems.value.find(item => item.id === id);
  if (task) {
    task.status = status;
  }
};

const moveTask = (draggedId, targetStatus) => {
  const task = backlogItems.value.find(item => item.id === draggedId);
  if (task) {
    task.status = targetStatus;
  }
};
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <BacklogContainer>
      <h2>Backlog</h2>
      <NewTask>
        <TaskInput v-model="newTask" placeholder="New task"/>
        <AddButton @click="addTask">Add</AddButton>
      </NewTask>
      <div class="kanban-board">
        <div class="kanban-column">
          <h3>To Do</h3>
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'todo')" :key="item.id" v-drag="{ data: item.id }">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.id, 'in-progress')">In Progress</button>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </div>
        <div class="kanban-column" v-drop="{ accept: 'task', drop: (data) => moveTask(data, 'in-progress') }">
          <h3>In Progress</h3>
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'in-progress')" :key="item.id" v-drag="{ data: item.id }">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.id, 'done')">Done</button>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </div>
        <div class="kanban-column" v-drop="{ accept: 'task', drop: (data) => moveTask(data, 'done') }">
          <h3>Done</h3>
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'done')" :key="item.id" v-drag="{ data: item.id }">
              <span>{{ item.title }}</span>
              <div>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </div>
      </div>
    </BacklogContainer>
  </DndProvider>
</template>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-between;
}

.kanban-column {
  flex: 1;
  margin: 0 1em;
}
</style>