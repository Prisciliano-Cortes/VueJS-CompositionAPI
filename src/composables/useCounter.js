import { ref } from "vue"

const useCounter = ( initValue = 5 ) => {
    const counter = ref( initValue )

    const increase = () => {
        counter.value++
    }

    const decrease = () => {
        counter.value--
    }

    return {
        counter,
        increase,
        decrease
    }
}

export default useCounter