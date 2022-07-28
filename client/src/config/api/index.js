import axios from 'axios'

const baseConfig = {
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json'
    }
}

const API = axios.create(baseConfig)

export default API