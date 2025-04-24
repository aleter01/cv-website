import {ref} from 'vue'

export const useReviews = () => {
    let reviews = ref([ ])
        return {
           reviews
        }
 }