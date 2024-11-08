import { useState } from 'react'
import Addition from './components/addition'
import './App.css'
import Counter from './components/Counter'
function App(){
  let [page,setpage]=useState('counter')
  if (page==='addition')
    return(
      <>
        <nav>
          <button onClick={()=>{setpage('counter')}}>Counter</button>
        </nav>
        <Addition/>
      </>
    )
  else
    return(
      <>
        <nav>
          <button onClick={()=>{setpage('addition')}}>Addition</button>
        </nav>
        <Counter/>
      </>
    )
}
export default App