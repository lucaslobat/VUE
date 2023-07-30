<template>
  <section>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <BaseBadge type="admin" caption="ADMIN"></BaseBadge>
      </li>
      <li>
        <BaseBadge type="author" caption="AUTHOR"></BaseBadge>
      </li>
    </ul>
  </section>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
