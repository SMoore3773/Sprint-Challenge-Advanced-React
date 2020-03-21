import React from 'react';
import useDarkMode from './Hooks/useDarkMode';


const Header =()=>{
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e =>{
        e.preventDefault();
        setDarkMode(!darkMode)
    };
    
    return(
        <div>
            <button
            onClick={toggleMode}
            >Dark Mode Toggle</button>
        </div>
    )
}

export default Header;