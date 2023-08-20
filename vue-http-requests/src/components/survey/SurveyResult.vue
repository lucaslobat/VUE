<template>
  <li>
    <p>
      <div>
        <span class="highlight">{{ name }}</span> rated the learning experience
        <span :class="ratingClass">{{ rating }}</span>
      </div>
      <BaseButton @click="deleteItem">Delete item</BaseButton>
    </p>
  </li>
</template>

<script>
export default {
  props: ['name', 'rating','id'],
  computed: {
    ratingClass() {
      return 'highlight rating--' + this.rating;
    },
  },
  methods: {
    deleteItem(){
      fetch(`https://vue-http-requests-2f3fb-default-rtdb.europe-west1.firebasedatabase.app/surveys/${this.id}.json`,{method:'DELETE'}).then(res => {
        const parsedResult = res.json();
        return console.log(parsedResult)
      })
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  display:flex;
  justify-content: space-between;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>