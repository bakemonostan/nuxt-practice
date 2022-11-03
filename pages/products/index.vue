<template>
  <div>
    <p>Products page</p>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <Card :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});

// fetch Products
const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped></style>
