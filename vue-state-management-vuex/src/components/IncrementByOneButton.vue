<template>
    <button @click="incrementByTen">Add 10</button>
</template>

<script>
export default {
    methods: {
        incrementByTen() {
            this.$store.dispatch({ type: 'asyncIncreaseByTen', amount: 10 })
        }
    }
}
</script>