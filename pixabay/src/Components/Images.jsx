import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Images = () => {
    const { imageData, imageByCategory, setQuery } = useContext(PixabayContext);

    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='text-center'>
                    <button type="button" onClick={()=> imageByCategory('nature')} className="mx-2 btn btn-outline-primary">Nature</button>
                    <button type="button" onClick={()=> imageByCategory('travel')} className="mx-2 btn btn-outline-secondary">Travel</button>
                    <button type="button" onClick={()=> imageByCategory('fashion')} className="mx-2 btn btn-outline-success">Fashion</button>
                    <button type="button" onClick={()=> imageByCategory('food')} className="mx-2 btn btn-outline-warning">Food</button>
                    <button type="button" onClick={()=> imageByCategory('health')} className="mx-2 btn btn-outline-info">Health</button>
                    <button type="button" onClick={()=> imageByCategory('sports')} className="mx-2 btn btn-outline-light">Sports</button>
                    <input type="text" onChange={(e)=> setQuery(e.target.value)} placeholder='Search anything' />
                </div>
                <div className="my-5">
                    <div className='flex-container'>
                        {imageData.map((data) => <div key={data.id}>
                            <div className='image-block'>
                                <img src={data.largeImageURL} alt="image" />
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Images