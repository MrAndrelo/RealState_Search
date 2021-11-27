import axios from 'axios';

export const baseUrl= "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '62cf9b5aa8msh9c3261655cc39e0p1e3e15jsn85522059a35f'
        }
    });

    return data;
}