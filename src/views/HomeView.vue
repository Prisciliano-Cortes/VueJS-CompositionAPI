<template>
    <div class="home">
        <h1> Reactive vs ref </h1>
        <h3>{{ ironMan }}</h3>
        <h3>{{ hulk }}</h3>

        <button @click="changeIronMan">Change IronMan</button>
        <button @click="changeHulk">Change hulk</button>

        <h3>IronMan {{ ironManIsAlive }}</h3>
        <h3>Hulk {{ hulkIsAlive }}</h3>

        <button @click="changeStatus">ChangeStatus</button>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue';

    export default {
        name: 'HomeView',
        setup() {
            const ironMan = ref({ name: 'Tony', age: 50 })
            const hulk = reactive({ name: 'Bruce', age: 50 })

            let ironManIsAlive = reactive(false)
            const hulkIsAlive = ref(true)

            const changeIronMan = () => {
                ironMan.value.name = 'Tony Stark'
                ironMan.value.age = 55
            }
            
            const changeHulk = () => {
                hulk.name = 'Bruce Banner'
                hulk.age = 45
            }

            const changeStatus = () => {
                hulkIsAlive.value = !hulkIsAlive.value
                ironManIsAlive = reactive(!ironManIsAlive)
            }

            return {
                ironMan,
                hulk,
                ironManIsAlive,
                hulkIsAlive,

                changeIronMan,
                changeHulk,
                changeStatus
            }
        }
    }
</script>
