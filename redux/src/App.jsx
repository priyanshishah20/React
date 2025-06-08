import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementBy20 } from './Redux/counterSlice'

const App = () => {
  const counter = useSelector((state) => state.aa.value)
  const dispatch = useDispatch()

  return (
    <>
    <div>{counter}</div>
    <button onClick={()=> dispatch(increment())}>Increase</button>
    <button onClick={()=> dispatch(decrement())}>Decrease</button>
    <button onClick={()=> dispatch(incrementBy20())}>Increase by 20</button>
    </>
  )
}

export default App