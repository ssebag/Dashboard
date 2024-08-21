import React, {createContext,  useEffect, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light");
    localStorage.setItem("theme", theme);
  
    function ToggleChangeMode() {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
    
    useEffect(() =>
    {
      setTheme(localStorage.getItem("theme"))
        ,[]});

    return(
        <div>
           <DarkModeContext.Provider value={{theme, ToggleChangeMode}}>
             <div className={theme}>
              {props.children}
              </div>
           </DarkModeContext.Provider>
        </div>
    )
};

export {DarkModeContext, DarkModeProvider}
