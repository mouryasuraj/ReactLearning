import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider } from "./context/theme";

function App() {


  const [themeMode, setThemMode] = useState('light');

  const lightMode =()=>{
    setThemMode('light')
  }
  const darkMode =()=>{
    setThemMode('dark')
  }
  

  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  },[themeMode])



  return (
    <ThemeContextProvider value={{themeMode, lightMode, darkMode}}>
      <h1 className="text-green-500 text-center text-lg m-10">Context APi Project</h1>
      <div className="w-full max-w-sm mx-auto">
        <div className="text-right">
          <ThemeBtn />
        </div>
        <Card />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
