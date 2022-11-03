<template>
  <div>
    <header class="shadow-sm bg-white p-8">
      <nav class="container mx-auto flex justify-between">
        <nuxt-link to="/" class="font-bold">Nuxt Dojo</nuxt-link>
        <ul class="flex items-center gap-8">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/products" class="btn">products</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
