import { useState } from "react";

function App() {

  const [color, setColor] = useState('olive')

  return (
    // bg container
    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
    {/* btnContainer */}
      <div className="fixed flex flex-wrap bottom-12 justify-center px-4 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 px-3 py-2 bg-white rounded">
        {/* Color Buttons */}
          <button onClick={()=> setColor('red')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'red'}} >red</button>
          <button onClick={()=> setColor('blue')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'blue'}} >blue</button>
          <button onClick={()=> setColor('green')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'green'}} >green</button>
          <button onClick={()=> setColor('yellow')} className="px-3 py-1 rounded-sm text-black capitalize" style={{backgroundColor:'yellow'}} >yellow</button>
          <button onClick={()=> setColor('black')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'black'}} >black</button>
          <button onClick={()=> setColor('olive')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'olive'}} >olive</button>
          <button onClick={()=> setColor('skyBlue')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'skyBlue'}} >skyBlue</button>
          <button onClick={()=> setColor('purple')} className="px-3 py-1 rounded-sm text-white capitalize" style={{backgroundColor:'purple'}} >purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
