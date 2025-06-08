import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,
  counter: 9,
  name: 'priyanshi',
  product: [
    {id:1, framework: 'React'},
    {id:2, framework: 'Redux'},
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { // parameter name can be anything
      state.value += 1;
      state.counter +=1;
    },
    decrement: (state) => { 
        state.value -= 1
        state.counter -=1;
    },
    incrementBy20: (state) => { // if we are creating any function, we need to export as well
        state.value += 20;
        state.counter += 20;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy20 } = counterSlice.actions

export default counterSlice.reducer