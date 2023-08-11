import axios from 'axios';

const intance = axios.create(
    {
        baseURL: 'http://localhost:4000/api',
        withCredentials: true
    }
)

export default intance;