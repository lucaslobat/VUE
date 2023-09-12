<template>
    <ul>
        <li v-for="user in usersArray" key="user" @click="removeUser(user)"> {{ user }}</li>
    </ul>
    <form @submit.prevent="addUser">
        <label for="enterUser">Introduce a new user: </label>
        <input type="text" id="enterUser" ref="enteredUser">
        <button>Save</button>

    </form>
</template>

<script>
export default {
    data(){
        return {
            usersArray:['Dorothy','Victoria','Mandy','Bridget']
        }
    },
    methods: {
        addUser(){
            const enteredUser = this.$refs.enteredUser.value;
            this.usersArray.unshift(enteredUser);
            this.$refs.enteredUser.value = "";
        },
        removeUser(userId){
            const filteredArray = this.usersArray.filter((user) => user !== userId);
            this.usersArray = filteredArray;
        }
    }
}
</script>

<style scoped>

ul {
    list-style: none;
    padding:0;
    margin:0;
}

li {
    border: 2px solid #ccc;
    margin:0.5rem;
    padding:1rem;
}
</style>