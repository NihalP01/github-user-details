import axios from 'axios';

export const baseUrl = 'https://api.github.com/users'

export const apis = async (userName) => {
    try {
        const data = await axios.get(baseUrl + `/${userName}`)
        return data;
    }catch(error){
        throw error;
    }    
}