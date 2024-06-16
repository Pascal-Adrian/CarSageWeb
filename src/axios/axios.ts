import axios from 'axios'

const axiosService = axios.create({
  baseURL: 'https://3aea-81-180-73-68.ngrok-free.app/api/v1',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    'ngrok-skip-browser-warning':  '69420',
    "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    },
})

export default axiosService