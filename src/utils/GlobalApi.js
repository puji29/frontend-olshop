import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }

})

export const getSliders = async() =>{
    try {
       const res = await api.get('sliders')
       return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}