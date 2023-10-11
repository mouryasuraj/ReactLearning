import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // Function to increase value
  const increaseValue =()=>{
    if(counter<20){
      setCounter(counter + 1)
    }
  }

  // Function to decrease value
  const decreaseValue =()=>{
    if(counter>0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <p>{counter}</p>
      {/* Increase Value */}
      <button onClick={increaseValue}>Increase</button>
      {/* Decrease Value */}
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
