import axios from 'axios'

const baseConfig = {
  baseURL: 'https://heroku-reverse-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const API = axios.create(baseConfig)

export default API
