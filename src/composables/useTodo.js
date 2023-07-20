import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {
    const store = useStore()
    
    const pending = computed( () => store.getters['pendingTodo'])

    const all = computed( () => store.getters['allTodo'] )

    const completed = computed( () => store.getters['completedTodo'])

    const getTodoByTabs = computed( () => store.getters['getTodoByTab'](currentTab.value) )

    const currentTab = ref('all')

    const toggleTodo = ( id ) => {
        store.commit('toggleTodo', id)
    }

    const isOpen = ref(false)
    const newTodo = ref('')

    const openModal = () => {
        isOpen.value = true
    }

    const closeModal = () => {
        isOpen.value = false
    }
    
    const createTask = (text) => {
        store.commit('createTodo', text)
    }
    
    return {
        currentTab,
        all,
        pending,
        completed,
        getTodoByTabs,
        toggleTodo,
        isOpen,
        newTodo,
        openModal,
        closeModal,
        createTask
    }
}

export default useTodo