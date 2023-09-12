<template>
    <TransitionGroup tag="ul" name="usersList">
        <li v-for="user in usersArray" :key="user" @click="removeUser(user)"> {{ user }}</li>
    </TransitionGroup>
    <form @submit.prevent="addUser">
            <label for="enterUser">Introduce a new user: </label>
            <input type="text" id="enterUser" ref="enteredUser">
            <button>Save</button>

        </form>
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
    margin: 0;
}

li {
    border: 2px solid #ccc;
    margin: 0.5rem;
    padding: 1rem;
}

.usersList-move,
.usersList-enter-active,
.usersList-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.usersList-enter-from,
.usersList-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}
</style>