<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Nuxt Dojo</nuxt-link>
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
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}
ul {
  display: flex;
  gap: 3rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: #12b488;
}
</style>
