<template>
    <h1>Counter view</h1>
    
    <h3>{{ counter }}</h3>

    <button @click="increase"> +1 </button>
    <button @click="decrease"> -1 </button>
</template>

<script>
    import useCounter from '@/composables/useCounter'

    export default {
        name: 'Counter',
        setup() {
            const { counter, increase, decrease } = useCounter(25)

            return {
                counter,

                increase,
                decrease
            }
        }
    }
</script>
