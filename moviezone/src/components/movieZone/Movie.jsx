import React, { useState } from 'react'
import { movies } from './data'

const Movie = () => {
    const [movieList, setMovieList] = useState(movies);
    const filterCategory = (cat) => {
        setMovieList(movies.filter((data) => data.category == cat))
    }

    return (
        <>
            {/* <h1 className='text-center'>Movie</h1> */}
            <div className='btns text-center my-4'>
                <button onClick={()=>{setMovieList(movies)}} type="button" className="btn btn-outline-secondary">All</button>
                <button onClick={()=>{filterCategory('Action')}} type="button" className="btn btn-outline-primary">Action</button>
                <button onClick={()=>{filterCategory('Thriller')}} type="button" className="btn btn-outline-warning">Thriller</button>
                <button onClick={()=>{filterCategory('Animation')}} type="button" className="btn btn-outline-success">Animation</button>
                <button onClick={()=>{filterCategory('Horror')}} type="button" className="btn btn-outline-danger">Horror</button>
                <button onClick={()=>{filterCategory('Drama')}} type="button" className="btn btn-outline-light">Drama</button>
                <button onClick={()=>{filterCategory('Sci-Fi')}} type="button" className="btn btn-outline-info">Sci-Fi</button>
            </div>
            <div className='main-container'>
                <div className='flex-container'>
                    {movieList.map((data) =>
                        <div style={{ maxWidth: '250px' }} key={data.id}>
                            <img src={data.poster_path} alt="poster" className='poster' style={{ width: '200px' }} />
                            <p className='movie-title mt-3'>{data.title}</p>
                            <span className='release-date'>{data.release_date}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Movie