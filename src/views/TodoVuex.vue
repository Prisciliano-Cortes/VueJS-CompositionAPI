<template>
    <h1>List homework</h1>
    <h4>Homework: {{ pending.length }} </h4>

    <hr />

    <button 
        :class="{ 'active': currentTab === 'all' }"
        @click="currentTab='all'"
        >
        Todo
    </button>
    
    <button 
        :class="{ 'active': currentTab === 'pending' }"
        @click="currentTab='pending'"
    >
        Completed
    </button>
    
    <button 
        :class="{ 'active': currentTab === 'completed' }"
        @click="currentTab='completed'"
    >
        Pending
    </button>

    <div>
        <ul>
            <li 
                v-for="todo in getTodoByTabs" 
                :key="todo.id" 
                :class="{ 'completed': todo.completed}"
                @dblclick="toggleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal">Create todo</button>

    <modal v-if="isOpen" @on:close="closeModal">
        <template v-slot:header>
            <h2>New task</h2>
        </template>

        <template v-slot:body>
             <form @submit.prevent="createTask(newTodo), closeModal()">
                <input 
                    type="text"
                    placeholder="New task"
                    v-model="newTodo"
                />
                <br />
                <br />
                <button type="submit">Create task</button>
            </form>
        </template>

        <template v-slot:footer>
            <!-- <button @click="closeModal">Close</button> -->
        </template>
    </modal>
</template>

<script>
    import useTodo from '../composables/useTodo'
    import Modal from '../components/Modal.vue'
    
    export default {
        name: 'TodoVuex',
        components: {
            Modal
        },
        setup() {
            const { 
                all, 
                completed, 
                pending, 
                getTodoByTabs, 
                currentTab, 
                toggleTodo, 
                isOpen, 
                newTodo,
                openModal, 
                closeModal,
                createTask } = useTodo() 
            
            return {
                all,
                completed,
                pending,
                getTodoByTabs,
                currentTab,
                toggleTodo,
                isOpen,
                newTodo,
                openModal,
                closeModal,
                createTask
            }
        }
    }
</script>

<style scoped>
    div { 
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 300px;
        text-align: left;
    }

    li {
        cursor: pointer;
    }

    .active {
        background-color: #2c3e50;
        color: white;
    }

    .completed {
        text-decoration: line-through;
    }
</style>