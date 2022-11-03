<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/products">Nuxt Dojo Products</nuxt-link>
      </nav>
    </header>
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">products</nuxt-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  gap: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
}

li {
  list-style: none;
}

li a {
  text-transform: capitalize;
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: #12b488;
}
</style>
