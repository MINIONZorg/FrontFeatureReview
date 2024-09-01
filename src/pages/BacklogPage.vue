<script setup>
import {ref} from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
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
  {id: 0, title: 'Task 1', status: 'todo'},
  {id: 1, title: 'Task 2', status: 'in-progress'},
]);

const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    backlogItems.value.push({
      id: backlogItems.value.length,
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

const moveTask = (event) => {
  const {moved} = event;
  const {element, newIndex} = moved;
  const task = backlogItems.value.find(item => item && item.id === element.id);
  if (task) {
    if (newIndex === document.querySelector('.kanban-column:nth-child(1) .task-list')) {
      task.status = 'todo';
    } else if (newIndex === document.querySelector('.kanban-column:nth-child(2) .task-list')) {
      task.status = 'in-progress';
    } else if (newIndex === document.querySelector('.kanban-column:nth-child(3) .task-list')) {
      task.status = 'done';
    }
  }
};
</script>

<template>
  <BacklogContainer>
    <h2>Backlog</h2>
    <NewTask>
      <TaskInput v-model="newTask" placeholder="New task" @keyup.enter="addTask"/>
      <AddButton @click="addTask">Add</AddButton>
    </NewTask>
    <div class="kanban-board">
      <div class="kanban-column">
        <h3>To Do</h3>
        <TaskList>
          <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @change="moveTask">
            <TaskItem v-for="(item) in backlogItems.filter(item => item.status === 'todo')" :key="item.id">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.id, 'in-progress')">In Progress</button>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </VueDraggableNext>
        </TaskList>
      </div>
      <div class="kanban-column">
        <h3>In Progress</h3>
        <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @change="moveTask">
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'in-progress')" :key="item.id">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.id, 'done')">Done</button>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </VueDraggableNext>
      </div>
      <div class="kanban-column">
        <h3>Done</h3>
        <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @change="moveTask">
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'done')" :key="item.id">
              <span>{{ item.title }}</span>
              <div>
                <RemoveButton @click="removeTask(item.id)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </VueDraggableNext>
      </div>
    </div>
  </BacklogContainer>
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