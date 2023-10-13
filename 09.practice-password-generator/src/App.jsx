import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css'
import Title from './components/Title';
import Input from './components/Input';
import Bottom from './components/Bottom';

function App() {
  const [length, setLength] = useState('8')
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  // password generator function
  const passwordGenerator = useCallback(()=>{
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // condition to add number in password
    if(numAllowed) str += '0123456789';
    // condition to add character in password
    if(charAllowed) str += '!@#$%&<>|*+-/'

    // loops to created password according to the value of length
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword]);


  // useEffect Hooks to call the passwordGenerator function
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
      {/* Main Container */}
      <div className='w-full h-[100vh] bg-gray-900 px-4 py-8'>
          {/* Password Generator Container */}
          <div className='w-full max-w-xl px-5 py-4 bg-white mx-auto mt-20 rounded-md '>
              <Title />
              <Input password={password}/>
              <Bottom  length={length} setLength={setLength} number={numAllowed} setNum={setNumAllowed} character={charAllowed} setChar={setCharAllowed}/> 
          </div>
      </div>
    </>
  )
}

export default App;
