
import Chai from "./chai"
function App() {
  const username ="chai aur code"
  
  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    </>

    // {username} : is known as evaluated expression, here we dont write whole js we write final outcome, we can't write {if(true)username}but can write at the time of declartion because it does not this way in react.  
  )
}

export default App
