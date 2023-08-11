<template>
  <div class="the_header">
    <img
      class="logo"
      alt="logo"
      height="30"
      width="30"
    />
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <div>
      <input class="search-input" type="text" placeholder="Search" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.the_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background-color: whitesmoke;
}

.nav-links {
  display: flex;
  list-style: none;

}

.nav-links li a {
  transition: all 0.5s ease 0;
  padding: 1rem 1.5rem;
}
.nav-links li a:hover {
  border-bottom: 1px solid black;
  cursor: pointer;
}

li,
a,
button {
  font-weight: 400;
  font-size: 0.9rem;
  color: black;
  letter-spacing: 0.2rem;
  text-decoration: none;
}

.search-input {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
</style>
