import { fetchWrapper } from "../config/fetchWrapper";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const movieService = {
    getAll,
    getMovieById,
    addMovie,
};

function getAll() {
    return fetchWrapper.get(baseUrl + "getAllMovies");
}

function getMovieById(Id, data) {
    return fetchWrapper.get(`${baseUrl}getById/${Id}`)
}

function addMovie(formData) {
    return fetchWrapper.post(baseUrl + "new-movie", formData)
}