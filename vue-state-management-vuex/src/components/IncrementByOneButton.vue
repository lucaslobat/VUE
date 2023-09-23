<template>
    <button @click="incrementByOne">Add 10</button>
</template>

<script>
export default {
    methods: {
        incrementByOne(){
            this.$store.commit('increaseByOne',10)
        }
    }
}
</script>