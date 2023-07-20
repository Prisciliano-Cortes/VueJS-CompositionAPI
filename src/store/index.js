import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
    state: {
        todo: [
            {
                id: '1',
                text: 'Collect the infinity stones',
                completed: false
            },
            {
                id: '2',
                text: 'Soul stone',
                completed: true 
            },
            {
                id: '3',
                text: 'Power stone',
                completed: true
            },
            {
                id: '4',
                text: 'Reality stone',
                completed: false
            },
            {
                id: '5',
                text: 'Get new minions',
                completed: false
            }
        ]
    },
    mutations: {
        toggleTodo( state, id) {
            const idx = state.todo.findIndex( todo => todo.id === id )

            state.todo[idx].completed = !state.todo[idx].completed
        },
        createTodo(state, text = '') {
            if (text.length <= 1) {
                return
            }

            state.todo.push({
                id: uuidv4(),
                completed: false,
                text
            })
        }
    },
    getters: {
        pendingTodo( state, getters, rootState ) {
            return state.todo.filter( to => !to.completed )
        },

        allTodo: (state, getters, rootState) => {
            return state.todo
        },

        completedTodo: ( state, getters, rootState ) => {
            return state.todo.filter( to => to.completed )
        },

        getTodoByTab: ( _, getters ) => ( currentTab ) => {
            switch ( currentTab ) {
                case 'all':
                    return getters.allTodo
                
                case 'pending':
                    return getters.pendingTodo

                case 'completed':
                    return getters.completedTodo
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
