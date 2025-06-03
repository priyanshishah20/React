import React, { useEffect, useState } from 'react'

const Meal = () => {
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
      const fetchAPI = async()=> {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        const data = await api.json();
        //console.log('the ..', data.meals);
        setMealData(data.meals);
      }
    fetchAPI();
    }, []);
    
  return (
    <>
    <div className='flex-container'>
        {mealData.map((data) => <div key="data.idMeal" className='flex-child'>
            <img src={data.strMealThumb} alt="food" className='poster' />
            <p className='food-title'>{data.strMeal}</p>
        </div>)}
    </div>
    </>
  )
}

export default Meal