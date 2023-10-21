import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import Theme from "./components/Theme";
import Card from "./components/Card";

function App() {


  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () =>{
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')
  }


  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode)
  },[themeMode])



  return (
    <ThemeProvider value={{themeMode,lightTheme ,darkTheme}}>
      <div className="flex flex-wrap items-center min-h-screen bg-gray-700">
        <div className="w-full">
          {/* ThemeButton */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4 ">
            <Theme />
          </div>
          {/* Card */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
