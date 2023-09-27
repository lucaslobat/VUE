<template>
    <button v-if="!getUserAuthState" @click="userLogin">Login</button>
    <button v-else @click="userLogoff">Loggoff</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['userLogin', 'userLogoff'])
    },
    computed: {
        ...mapGetters(['getUserAuthState'])
    }
}
</script>