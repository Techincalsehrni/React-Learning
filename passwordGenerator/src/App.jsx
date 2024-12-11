import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumAllow] = useState(false)
  const [charallow, setCharAllow]=useState(false)
  const [password, setPassword]=useState("")

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numallow)  str+="0123456789"
    if (charallow) str+="~!@#$%^&*()_-=+{[]}"

    for(let i=1; i<length; i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length, numallow, charallow, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        test
      </div>
    </>
  )
}

export default App
