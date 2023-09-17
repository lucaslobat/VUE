<template>
    <button @click="incrementByOne">Add 1</button>
</template>

<script>
export default {
    methods: {
        incrementByOne(){
            this.$store.commit('incrementByOne')
        }
    }
}
</script>