import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(7)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number) str += '0123456789';
    if(character) str += '!@#$%&*(){}[]';

    for (let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, setPassword])
  
  const copyPwdToClipboard = useCallback(()=> {
    // when click on copy btn, pwd is selected
    passwordRef.current?.select()
    // to select custom range
    //passwordRef.current?.setSelectionRange(0,7)
    // to copy on clipboard
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md p-4 my-4 bg-gray-700'>
      <h1 className='text-2xl text-center font-bold mb-3'>Password Generator</h1>
        <div className="flex rounded-md overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none bg-white text-gray-800 w-full py-1 px-3' placeholder='password' ref={passwordRef} readOnly />
          <button className='bg-blue-500 px-4 py-2 text-md' onClick={copyPwdToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 text-orange-500">
            <input type="range" value={length} min={4} max={70} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer' />
            <label htmlFor="length">Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1 text-orange-500">
            <input type="checkbox" defaultChecked={number} id='' onChange={()=> {setNumber((prev) => !prev)}} />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1 text-orange-500">
            <input type="checkbox" defaultChecked={character} id='characterInput' onChange={()=> {setCharacter((prev) => !prev)}} />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
