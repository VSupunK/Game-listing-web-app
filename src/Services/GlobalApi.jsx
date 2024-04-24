import axios from "axios";

const key = "1c90db60c2a8425980648e924b6b2bda";
const axiosCreate=axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenresId=(id)=>axiosCreate.get('/games?key='+key+'/genres?key='+id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenresId
}