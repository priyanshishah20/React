import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')
  return (
    <>
      <div className={`w-full h-screen bg-${color}-500 p-4 duration-200`}>
        <div className='rounded-xl bg-[#cecece] m-auto w-3/4 p-2 text-center shadow-lg'>
          <button onClick={() => setColor('rose')} className='rounded-xl border-rose-500 border-1 p-1 px-3 bg-rose-500 text-white mx-1'>Rose</button>
          <button onClick={() => setColor('purple')} className='rounded-xl border-purple-500 border-1 p-1 px-3 bg-purple-500 text-white mx-1'>Purple</button>
          <button onClick={() => setColor('yellow')} className='rounded-xl border-yellow-500 border-1 p-1 px-3 bg-yellow-500 text-white mx-1'>Yellow</button>
          <button onClick={() => setColor('pink')} className='rounded-xl border-pink-500 border-1 p-1 px-3 bg-pink-500 text-white mx-1'>Pink</button>
          <button onClick={() => setColor('blue')} className='rounded-xl border-blue-500 border-1 p-1 px-3 bg-blue-500 text-white mx-1'>Blue</button>
          <button onClick={() => setColor('gray')} className='rounded-xl border-gray-500 border-1 p-1 px-3 bg-gray-500 text-white mx-1'>Gray</button>
          <button onClick={() => setColor('orange')} className='rounded-xl border-orange-500 border-1 p-1 px-3 bg-orange-500 text-white mx-1'>Orange</button>
          <button onClick={() => setColor('violet')} className='rounded-xl border-violet-500 border-1 p-1 px-3 bg-violet-500 text-white mx-1'>Violet</button>
          <button onClick={() => setColor('stone')} className='rounded-xl border-stone-500 border-1 p-1 px-3 bg-stone-500 text-white mx-1'>Stone</button>
          <button onClick={() => setColor('green')} className='rounded-xl border-green-500 border-1 p-1 px-3 bg-green-500 text-white mx-1'>Green</button>
          <button onClick={() => setColor('fuchsia')} className='rounded-xl border-fuchsia-500 border-1 p-1 px-3 bg-fuchsia-500 text-white mx-1'>Fuchsia</button>
          <button onClick={() => setColor('emerald')} className='rounded-xl border-emerald-500 border-1 p-1 px-3 bg-emerald-500 text-white mx-1'>Emerald</button>
          <button onClick={() => setColor('cyan')} className='rounded-xl border-cyan-500 border-1 p-1 px-3 bg-cyan-500 text-white mx-1'>Cyan</button>
        </div>
      </div>
    </>
  )
}

export default App