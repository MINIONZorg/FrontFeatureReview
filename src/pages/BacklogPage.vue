<script setup>
import {onMounted, ref} from 'vue';
import {VueDraggableNext} from 'vue-draggable-next';
import {
  AddButton,
  BacklogContainer,
  NewTask,
  RemoveButton,
  TaskInput,
  TaskItem,
  TaskList
} from '@/style/StyledComponents';

// const todoList = ref([
//   {idx: null, title: null, status: null},
// ]);

// const list = ref({
//   todo: [{idx: null, title: null, status: null}],
//   progress: [{idx: null, title: null, status: null}],
//   done: [{idx: null, title: null, status: null}],
// });
const list = ref({
  todo: [],
  progress: [],
  done: [],
});
// const progressList = ref([
//   {idx: null, title: null, status: null},
// ]);
//
// const doneList = ref([
//   {idx: null, title: null, status: null},
//
// ]);

const newTask = ref('');

const addTask = () => {

  if (newTask.value.trim()) {
    list.value.todo.push({
      idx: new Date(),
      title: newTask.value.trim(),
      status: 'todo',
    });
    newTask.value = '';
  }
};

// const removeTask = (title) => {
//   todoList.value = todoList.value.filter(item => item.title !== title);
// };

// const changeStatus = (title, status) => {
//   const task = todoList.value.find(item => item.title === title);
//   if (task) {
//     task.status = status;
//   }
// };

const moveTask = (event, status) => {
  const {added} = event;
  if (added) {
    const {element} = added;
    element.status = status
  }
};

onMounted(() => {
})

</script>

<template>
  <BacklogContainer>
    <h2>Backlog</h2>
    <NewTask>
      <TaskInput v-model="newTask" @keyup.enter="addTask" placeholder="New task"/>
      <AddButton @click="addTask">Add</AddButton>
    </NewTask>
    <div class="kanban-board">
      <div class="kanban-column">
        <h3>To Do</h3>
        <TaskList>
          <VueDraggableNext v-model="list.todo" :group="{ name: 'tasks'}" @change="moveTask($event,'todo')"
                            item-index="title">
            <TaskItem v-for="(item,idx) in list.todo" :key="item.title">
              <span>{{ item.title }}</span>
              <div>
                <button @click="item.status = 'in-progress'; list.progress.push(item); list.todo.splice(idx,1)">In
                  Progress
                </button>
                <RemoveButton @click="list.todo.splice(idx,1)">Remove</RemoveButton>
              </div>
            </TaskItem>
          </VueDraggableNext>
        </TaskList>
      </div>
      <div class="kanban-column">
        <h3>In Progress</h3>
        <VueDraggableNext v-model="list.progress" :group="{ name: 'tasks'}"
                          @change="moveTask($event,'in-progress')" item-key="title">

          <TaskItem v-for="(item,idx) in list.progress" :key="item.title">
            <span>{{ item.title }}</span>
            <div>
              <!--              <button @click="changeStatus(item.title, 'done')">Done</button>-->
              <button @click="item.status = 'done'; list.done.push(item); list.progress.splice(idx,1)">Done</button>

              <RemoveButton @click="list.progress.splice(idx,1)">Remove</RemoveButton>
            </div>
          </TaskItem>

        </VueDraggableNext>
      </div>
      <div class="kanban-column">
        <h3>Done</h3>
        <VueDraggableNext v-model="list.done" :group="{ name: 'tasks' }"
                          @change="moveTask($event,'done')" item-key="title">
          <TaskItem v-for="(item,idx) in list.done" :key="item.title">
            <span>{{ item.title }}</span>
            <div>
              <RemoveButton @click="list.done.splice(idx)">Remove</RemoveButton>
            </div>
          </TaskItem>
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