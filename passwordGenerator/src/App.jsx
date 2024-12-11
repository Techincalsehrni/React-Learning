import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumAllow] = useState(false)
  const [charallow, setCharAllow]=useState(false)
  const [password, setPassword]=useState("")

  //useRef hook
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numallow)  str+="0123456789"
    if (charallow) str+="~!@#$%^&*()_-=+{[]}"

    for(let i=0; i<length; i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length, numallow, charallow, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numallow, charallow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500 '>
        <h1 className ='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button
          onClick ={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex-items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={()=>{
                setNumAllow((prev)=>!prev);
              }}
            />
            <label htmlFor ="numberInput">Numbers</label>
          </div>
          <div className='flex-items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={()=>{
                setCharAllow((prev)=>!prev);
              }}
            />
            <label htmlFor ="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
// 2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
// 3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values
