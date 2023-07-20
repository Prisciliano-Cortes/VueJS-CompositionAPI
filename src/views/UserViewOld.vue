<template>
    <h3 v-if="isLoading">Loading...</h3>

    <h2 v-else>Users</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id} in users" :key="id">
                <h4>{{ first_name }} - {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="nextPage">Next</button>
    <button @click="prevPage">Prev</button>

    <span>Page: {{ currentPage }}</span>
</template>

<script>
    import useUsers from '@/composables/useUsers'

    export default {
        setup() {

            //const { users, isLoading, currentPage, errorMessage, nextPage, prevPage } = useUsers()

            return {
                ...useUsers()
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 250px;
    }
</style>