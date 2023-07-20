import { ref } from "vue"
import axios from 'axios';

const useUsers = () => {
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref('')

    const getUsers = async( page = 1 ) => {
        if ( page <= 0 ) {
            page = 1
        }

        isLoading.value = true

        const { data } = await axios.get(`https://reqres.in/api/users`, {
            params: {
                page
            }
        })

        if ( data.data.length > 0) {
            users.value = data.data
            currentPage.value = page
            errorMessage.value = null
        } else if ( currentPage.value > 0) {
            errorMessage.value = 'no more records'
        }

        isLoading.value = false
    }
    
    getUsers()

    const nextPage = () => {
        getUsers( currentPage.value + 1 )
    }

    const prevPage = () => {
        getUsers( currentPage.value - 1 )
    }

    return {
        users,
        isLoading,
        currentPage,
        errorMessage,
        nextPage,
        prevPage
    }
}

export default useUsers