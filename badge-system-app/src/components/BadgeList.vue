<template>
  <WrapperCard>
    <template #main>
      <ul>
        <li>
          <BaseBadge type="admin" caption="ADMIN"></BaseBadge>
        </li>
        <li>
          <BaseBadge type="author" caption="AUTHOR"></BaseBadge>
        </li>
      </ul>
    </template>
  </WrapperCard>
</template>

<style scoped>
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
