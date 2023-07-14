import axios from "axios";
import {API_BASE_URL , API_REQUST_TIMEOUT} from './constant'

export const http = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
    timeout: 2000,
})
