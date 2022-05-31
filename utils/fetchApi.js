import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '9bca64d1eamsh493f48f406a3efcp1e1cc7jsn4167bc7dffb0'
          }
    });
    return data;
}