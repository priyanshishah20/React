import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
    const [imageData, setImageData] = useState([])
    const [query, setQuery] = useState('london')

    const api_key = '50731024-e9cf97a613c40ef2c79b0aeda'
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=50`);
            const data = await api.json();
            //console.log(data.hits)
            setImageData(data.hits)
        }
        fetchData();
    }, [query]);

    const imageByCategory = async (cat) => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=50`);
        const data = await api.json();
        setImageData(data.hits)
    }

    return (
        <PixabayContext.Provider value={{ imageData, imageByCategory, setQuery }}>{props.children}</PixabayContext.Provider>
    )
}

export default PixabayState