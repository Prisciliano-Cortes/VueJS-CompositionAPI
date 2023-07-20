import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "counter-app" */ '../views/Counter.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "counter-app" */ '../views/UserView.vue')
    },
    {
        path: '/pokemon-search',
        name: 'pokemon-search',
        component: () => import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemon.vue')
    },
    {
        path: '/pokemon/:id',
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "pokemon-id" */ '../views/Pokemon.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import(/* webpackChunkName: "todo-app" */ '../views/TodoVuex.vue')
    },
    {
        path: '/slots',
        name: 'slots',
        component: () => import(/* webpackChunkName: "custom-slots" */ '../views/CustomSlots.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
