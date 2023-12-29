import axios from "axios";

export async function getMovieList() {
    const url = process.env.OMDB_LINK;
    // const url = 'https://api.themoviedb.org/3/collection/collection_id?language=en-US';

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmJmNDJkOWNhN2UxOWUwY2U4ZDVhOTQwZjE4ZTlhZiIsInN1YiI6IjYyZTdiYjBiMWU2NDg5MDA1ZWUzNzQ1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvPF7Z1sulcUtqPCSv-G3iDs-QX65iwFiQwV-GpIVTk'
    //     }
    // };

    // try {
    //     const movies = await axios(url, options);
    //     console.log(movies)
    //     return movies;
    // } catch (error) {
    //     console.log(error.message);
    // }

    return await axios.get(url);



}


