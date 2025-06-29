import axios from 'axios'

export const useAPI = {
    async get(path) {
        const result = await axios.get(`http://localhost:8088/${path}`)

        return result.data
    }
}
