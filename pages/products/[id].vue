<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = 'https://fakestoreapi.com/products/' + id;

// fetch data using dynamic params
const { data: product } = await useFetch(url, { key: id });

// handle product not found error
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal,
  });
}
</script>

<style scoped></style>
