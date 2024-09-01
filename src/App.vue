<script setup>
import { defineComponent } from 'vue';
import NavBar from '@/layout/NavBar.vue';

defineComponent({
  name: 'App',
  components: { NavBar }
});
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view id="contents-container"/>
  </div>
</template>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
}
#contents-container {
  width: 100%;;
}
</style>