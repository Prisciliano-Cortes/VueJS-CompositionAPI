<template>
    <h1>Search Pokemon: {{ pokemonId }}</h1>

    <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Number pokemon"
            autofocus
            v-model="pokemonId"
            ref="txtSearchId"
        />
    </form>
    <br />

    <span>Enter for search</span>
</template>

<script>
    import { ref, onActivated } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        name: 'SearchPokemon',
        setup() {
            const router = useRouter()

            const pokemonId = ref(1)
            const txtSearchId = ref()

            const onSubmit = () => {
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }

            onActivated( () => {
                txtSearchId.value.select()
            })

            return {
                pokemonId,
                txtSearchId,
                onSubmit
            }
        }
    }
</script>

<style>

</style>