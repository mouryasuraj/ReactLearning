import { useRef } from "react"

const Input = ({password}) => {

  let passRef = useRef(null);

  // function to copyPasswordText
  const copyPasswordText = () =>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }


  return (
    <div className="flex border-2 border-orange-600 rounded-md my-5 ">
        {/* input  */}
        <input 
                type="text" 
                value={password}
                placeholder="Password"
                className="w-full px-4 py-2 outline-none font-bold md:text-xl tracking-widest text-sky-600"
                readOnly
                ref={passRef}
            />
        {/* copy button */}
        <button onClick={copyPasswordText} className="px-4 bg-orange-600 font-bold text-white active:scale-[1.1] hover:bg-black duration-300 rounded-sm">Copy</button>
    </div>
  )
}

export default Input
