<template>
    <div class="about">
        <h1>{{ title }}</h1>

        <button @click="changeTitle">Change title</button>
    </div>
</template>

<script>
    import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onUnmounted, onUpdated, ref } from 'vue'

    export default {
        setup() {
            const title = ref('About')

            const changeTitle = () => {
                title.value = 'New about'
            }

            onMounted(() => {
                console.log('onMounted')
            })

            onUpdated(() => {
                console.log('onUpdated');
            })
            
            onUnmounted(() => {
                console.log('onUnmounted');
            })

            onBeforeMount(() => {
                console.log('onBeforeMount');
            })

            onBeforeUpdate(() => {
                console.log('onBeforeUpdate');
            })

            onBeforeUnmount(() => {
                console.log('onBeforeUnmount');
            })

            onErrorCaptured(() => {
                console.log('onErrorCaptured');
            })

            onActivated(() => {
                console.log('onActivated');
            })

            onDeactivated(() => {
                console.log('onDeactivated');
            })

            return {
                title,
                changeTitle
            }
        }
    }
</script>

