import axios from 'axios'

const request = axios.create({
    baseURL: 'http://123.207.32.32:8000'

})

export default request