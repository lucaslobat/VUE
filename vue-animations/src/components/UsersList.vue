<template>
    <TransitionGroup tag="ul" name="usersList">
        <li v-for="user in usersArray" :key="user" @click="removeUser(user)"> {{ user }}</li>
        <form @submit.prevent="addUser">
            <label for="enterUser">Introduce a new user: </label>
            <input type="text" id="enterUser" ref="enteredUser">
            <button>Save</button>
        </form>
    </TransitionGroup>
</template>

<script>
export default {
    data() {
        return {
            usersArray: ['Dorothy', 'Victoria', 'Mandy', 'Bridget']
        }
    },
    methods: {
        addUser() {
            const enteredUser = this.$refs.enteredUser.value;
            this.usersArray.unshift(enteredUser);
            this.$refs.enteredUser.value = "";
        },
        removeUser(userId) {
            const filteredArray = this.usersArray.filter((user) => user !== userId);
            this.usersArray = filteredArray;
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    text-align: center;
}

li {
    border: 2px solid #ccc;
    margin: 0.5rem auto;
    padding: 1rem;
    width:10rem;
}

.usersList-move,
.usersList-enter-active,
.usersList-leave-active {
    transition: all 0.8s ease-out;
}

.usersList-enter-from {
    opacity: 0;
    transform: translateX(-2rem);
}

.usersList-leave-to {
    opacity: 0;
    transform: translateX(2rem);
}

.usersList-enter-to,
.usersList.leave-from {
    opacity: 1;
}

.usersList-leave-active {
    position: absolute;
}
</style>