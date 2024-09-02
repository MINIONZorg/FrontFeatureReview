<script setup>

</script>

<template>
<div>
  <h1>Signup</h1>
  <div class="login">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <button>Signup</button>
  </div>
</div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  gap: 10px;
}
input{
  flex: 1;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5em;
}
</style>