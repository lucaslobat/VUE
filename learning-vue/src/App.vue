<template>
  <section>
    <h2>My friends</h2>
    <ul class="unordered-list">
      <friend-contact-card
        name="Mario Gomez"
        email-address="mariog@gmail.com"
        phone-number="165 176 394"
      ></friend-contact-card>
      <friend-contact-card
        name="Elisa Mataraz"
        email-address="elisam@gmail.com"
        phone-number="645 787 839"
        is-favorite="true"
      ></friend-contact-card>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: rgba(220, 220, 220, 255);
}

.unordered-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
