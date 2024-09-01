<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref('');
const chats = ref([
  { id: 1, name: 'Chat 1' },
  { id: 2, name: 'Chat 2' },
  { id: 3, name: 'Chat 3' }
]);
const selectedChat = ref(chats.value.length > 0 ? chats.value[0] : null);

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, sender: 'user' });
    newMessage.value = '';
  }
};

const selectChat = (chat) => {
  selectedChat.value = chat;
  messages.value = [];
};
</script>

<template>
  <div class="chat-container">
    <div class="chat-list">
      <h3>Chats</h3>
      <ul>
        <li v-for="chat in chats" :key="chat.id" @click="selectChat(chat)">
          {{ chat.name }}
        </li>
      </ul>
    </div>
    <div class="chat-content">
      <div class="chat-header">
        <h2 v-if="selectedChat.value">{{ selectedChat.value.name }}</h2>
        <h2 v-else>No Chat Selected</h2>
      </div>
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..."/>
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
}

.chat-container {
  display: flex;
  height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.chat-list {
  width: 30%;
  background-color: #f0f0f0;
  padding: 1em;
  border-right: 1px solid #ccc;
  overflow-y: auto;
}

.chat-list h3 {
  margin-top: 0;
}

.chat-list ul {
  list-style-type: none;
  padding: 0;
}

.chat-list li {
  padding: 0.5em 0;
  cursor: pointer;
}

.chat-list li:hover {
  background-color: #e0e0e0;
}

.chat-content {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #42b983;
  color: white;
  padding: 1em;
  text-align: center;
}

.chat-messages {
  flex: 1;
  padding: 1em;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.message {
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  border-radius: 20px;
  max-width: 70%;
  word-wrap: break-word;
}

.message.user {
  background-color: #42b983;
  color: white;
  align-self: flex-end;
}

.message.bot {
  background-color: #e0e0e0;
  color: black;
  align-self: flex-start;
}

.chat-input {
  display: flex;
  padding: 1em;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.chat-input input {
  flex: 1;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 0.5em;
}

.chat-input button {
  padding: 0.5em 1em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #369f6b;
}
</style>