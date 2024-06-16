import axios from 'axios'

const axiosService = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosService