import React from 'react'

function MovieCards({ movie }) {
    return (
        <>
            <div className='card'>
                <div className='card-title'>
                    {movie?.title}
                </div>
                <div className='card-body'>
                    <img src={movie?.poster} alt="" />
                </div>
                <div className='card-footer'>
                    <button>Click to view</button>
                </div>
            </div>
        </>
    )
}

export default MovieCards