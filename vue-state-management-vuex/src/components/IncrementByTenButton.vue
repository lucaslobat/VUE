<template>
    <button @click="asyncIBT({ amount: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        /*         incrementByTen() {
                    this.$store.dispatch({ type: 'asyncIncreaseByTen', amount: 10 })
                } */

        /* ...mapActions(["asyncIncreaseByTen"]), */

        ...mapActions({asyncIBT: 'asyncIncreaseByTen'})

    }
}
</script>