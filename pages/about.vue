<template>
  <div>
    <h1>About page</h1>
    <p>What do you want to talk...About?</p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/NGN');
</script>

<style scoped></style>
