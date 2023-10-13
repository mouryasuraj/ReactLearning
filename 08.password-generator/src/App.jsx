import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // function to create password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Condition to add numbers and character
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&?";

    // Loop to create password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);


  // useRef
  let passRef = useRef(null);
  
  // function to copy the password
  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect
  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])



  return (
    // body
    <div className="bg-gray-800 w-full h-[100vh] py-11 px-7">
      {/* password container */}

      <div className="w-full max-w-xl bg-white mx-auto px-4 py-3 my-8 rounded-md relative">

          {/* Heading */}
          <h1 className="text-center font-bold text-2xl text-orange-600">
            Password Generator
          </h1>

          {/* input */}
          <div className="flex shadow-sm my-4 border-[2px] border-orange-600 rounded">
            <input
              type="text"
              value={password}
              className="w-full py-1 px-3 outline-none text-lg font-bold text-sky-400 tracking-widest"
              readOnly
              placeholder="Password"
              ref={passRef}
            />
            {/* Copy Button */}
            <button onClick={copyPassword} className="bg-orange-600 py-2 px-4 shrink-0 active:scale-[1.1] hover:bg-black transition-all duration-200 text-white font-bold rounded-sm">
              Copy
            </button>
          </div>

          {/* bottom checkbox and range */}
          <div className="flex flex-wrap text-md gap-x-4 items-center py-2">
              {/*Length  */}
              <div className="flex items-center gap-x-1">
                <input
                  id="length"
                  type="range"
                  min={6}
                  max={30}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label htmlFor="length" className="text-orange-600 font-semibold">Length: {length}</label>
              </div>

              {/*nummber checkbox  */}
              <div className="flex items-center  gap-x-1">
                <input
                  id="number"
                  type="checkbox"
                  defaultChecked={numAllowed}
                  className="cursor-pointer"
                  onChange={()=> setNumAllowed(prev => !prev)}
                />
                <label htmlFor="number" className="text-orange-600 cursor-pointer font-semibold">Number</label>
              </div>

              {/*character checkbox  */}
              <div className="flex items-center  gap-x-1">
                <input
                  id="character"
                  type="checkbox"
                  defaultChecked={charAllowed}
                  className="cursor-pointer"
                  onChange={()=> setCharAllowed((prev) => !prev)}
                />
                <label htmlFor="character" className="text-orange-600 cursor-pointer font-semibold">Character</label>
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
