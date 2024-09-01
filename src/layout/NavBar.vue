<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'NavBar'
});
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/memo">Memo</router-link></li>
      <li><router-link to="/backlog">Backlog</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #42b983;
  padding: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 1em;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>