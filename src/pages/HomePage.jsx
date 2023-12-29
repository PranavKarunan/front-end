import React, { useEffect, useState } from 'react'
import MovieCards from '../components/MovieCards';
// import { movieService } from '../services/movieService';
import axios from 'axios';
import { fetchWrapper } from '../config/fetchWrapper';
import { getMovieList } from '../config/movieList';


function HomePage() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getAllMovies();
    }, [])
    async function getAllMovies() {
        const movies = await getMovieList();
        console.log(movies)
        setMovieList(movies?.data);
    }
    return (
        <div className='home'>
            {
                movieList?.length !== 0 ? (
                    movieList?.map(item => (
                        <MovieCards movie={item} />
                    ))
                ) : (
                    <div className='homepage-no-movie'>
                        <span>No movies found</span>
                    </div>
                )
            }
        </div>
    )
}

export default HomePage