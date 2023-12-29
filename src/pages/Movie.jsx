import React from 'react'

function Movie({ movie }) {
    return (
        <div>
            <div>
                {movie?.Title}
            </div>
            <div>
                {movie?.Year}
            </div>
            <div>
                {movie?.Plot}
            </div>
        </div>
    )
}

export default Movie