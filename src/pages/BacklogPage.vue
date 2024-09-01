<script setup>
import { ref } from 'vue';
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
  { title: 'Task 1', status: 'todo' },
  { title: 'Task 2', status: 'in-progress' },
]);

const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    backlogItems.value.push({
      title: newTask.value.trim(),
      status: 'todo',
    });
    newTask.value = '';
  }
};

const removeTask = (title) => {
  backlogItems.value = backlogItems.value.filter(item => item.title !== title);
};

const changeStatus = (title, status) => {
  const task = backlogItems.value.find(item => item.title === title);
  if (task) {
    task.status = status;
  }
};

const moveTask = (event) => {
  console.log(event.target);
  console.log(event.target);
  return false;
  // const { element, newIndex } = event;
  // const task = backlogItems.value.find(item => item.title === element.title);
  // if (task) {
  //   task.status = newIndex === 0 ? 'todo' : newIndex === 1 ? 'in-progress' : 'done';
  // }
};
</script>

<template>
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
            <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @end="moveTask">
            <TaskItem v-for="(item) in backlogItems.filter(item => item.status === 'todo')" :key="item.title">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.title, 'in-progress')">In Progress</button>
                <RemoveButton @click="removeTask(item.title)">Remove</RemoveButton>
              </div>
            </TaskItem>
            </VueDraggableNext>
          </TaskList>
      </div>
      <div class="kanban-column">
        <h3>In Progress</h3>
        <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @end="moveTask">
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'in-progress')" :key="item.title">
              <span>{{ item.title }}</span>
              <div>
                <button @click="changeStatus(item.title, 'done')">Done</button>
                <RemoveButton @click="removeTask(item.title)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </TaskList>
        </VueDraggableNext>
      </div>
      <div class="kanban-column">
        <h3>Done</h3>
        <VueDraggableNext v-model="backlogItems" :group="{ name: 'tasks' }" @end="moveTask">
          <TaskList>
            <TaskItem v-for="item in backlogItems.filter(item => item.status === 'done')" :key="item.title">
              <span>{{ item.title }}</span>
              <div>
                <RemoveButton @click="removeTask(item.title)">Remove</RemoveButton>
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