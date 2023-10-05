<template>
    <button v-if="!getUserAuthState" @click="userLogin">Login</button>
    <button v-else @click="userLogoff">Loggoff</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('userAuth', ['userLogin', 'userLogoff'])
    },
    computed: {
        ...mapGetters('userAuth', ['getUserAuthState'])
    }
}
</script>