<template>
    <h1>Learning slot</h1>
    <button @click="openModal">Open modal</button>

    <modal v-if="isOpen" @on:close="closeModal" title="Modal">
        <!-- <h2>Modal title</h2>
        <p>Lorem ipsum dolor sit meet</p>
        <button>Close</button> -->

        <template v-slot:header>
            <h2>Modal title</h2>
        </template>

        <template v-slot:body>
            <p>Lorem ipsum dolor sit meet</p>
        </template>

        <template v-slot:footer>
            <button @click="closeModal">Close</button>
        </template>

        <template v-slot:exposed="{ newTitle }">
            {{ newTitle }}
        </template>
    </modal>
</template>

<script>
    import { ref } from 'vue'
    import Modal from '../components/Modal.vue'

    export default {
        nam: 'CustomSlots',
        components: {
            Modal
        },
        setup() {

            const isOpen = ref(false)

            const openModal = () => {
                isOpen.value = true
            }

            const closeModal = () => {
                isOpen.value = false
            }

            return {
                isOpen,
                openModal,
                closeModal
            }
        }
    }   
</script>

<style>

</style>