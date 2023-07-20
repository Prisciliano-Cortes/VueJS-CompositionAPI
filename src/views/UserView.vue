<template>
    <h3 v-if="isLoading">Loading...</h3>

    <h2 v-else>Users</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <user-list 
            :users="users"
            v-slot="{ user }"
        >
            <h5>{{ user.first_name }} {{ user.last_name }} </h5>
            <span>{{ user.email }}</span>
        </user-list>
    </div>

    <button @click="nextPage">Next</button>
    <button @click="prevPage">Prev</button>

    <span>Page: {{ currentPage }}</span>
</template>

<script>
    import useUsers from '@/composables/useUsers'
    import UserList from '@/components/UserList.vue'

    export default {
        components: { 
            UserList 
        },
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