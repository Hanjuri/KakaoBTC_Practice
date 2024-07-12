import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    //테마 전환 함수
    const toggleTheme = ()=>{
        setIsDarkTheme(prevTheme => !prevTheme);
    }

    return(
        //value를 통해 상태와 함수를 전달
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        //Provider: 하위 컴포넌트에게 값을 전달하는 역할을 한다
    );
};
