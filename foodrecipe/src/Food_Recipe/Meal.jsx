import React, { useEffect, useState } from 'react'

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [mealItems, setMealItems] = useState('indian');
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealItems}`);
      const data = await api.json();
      //console.log('the data...', data.meals);
      setMealData(data.meals);
    }
    fetchAPI();
  }, [mealItems]);

  // to search food items
  const inputHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
    const data = await api.json();
    //console.log('search data..', data.meals);
    setMealData(data.meals);

    //setInputData('');
  }

  return (
    <>
      <div className='btns text-center my-4'>
        <button onClick={() => { setMealItems('indian') }} type="button" className="btn btn-outline-light">Indian</button>
        <button onClick={() => { setMealItems('Chinese') }} type="button" className="btn btn-outline-primary">Chinese</button>
        <button onClick={() => { setMealItems('Japanese') }} type="button" className="btn btn-outline-warning">Japanese</button>
        <button onClick={() => { setMealItems('American') }} type="button" className="btn btn-outline-success">American</button>
        <button onClick={() => { setMealItems('canadian') }} type="button" className="btn btn-outline-danger">Canadian</button>
        <button onClick={() => { setMealItems('thai') }} type="button" className="btn btn-outline-secondary">Thai</button>
        <button onClick={() => { setMealItems('british') }} type="button" className="btn btn-outline-info">British</button>
      </div>
      <form onSubmit={inputHandler} className='text-center'>
        <input type="text" onChange={(e)=> (setInputData(e.target.value))} placeholder='Search your food items' />
      {/* <p>{inputData}</p> */}
      </form>
      <div className='flex-container my-4'>
        {mealData.map((data) => <div key={data.idMeal} className='flex-child'>
          <img src={data.strMealThumb} alt="food" className='poster' />
          <p className='food-title'>{data.strMeal}</p>
        </div>)}
      </div>
    </>
  )
}

export default Meal