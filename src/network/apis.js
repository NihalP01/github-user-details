import axios from 'axios';


export const baseUrl = 'https://api.github.com/users'

export const apis = async (userName) => {
    const data = await axios.get(baseUrl + `/${userName}`)
        .catch((error) => {
            if (error.response) {
              
            }
        })
    return data;
}
