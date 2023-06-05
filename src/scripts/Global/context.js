import { createContext, useState } from 'react';



export const OptionContext = createContext();

export default function AppWrap({children}) {
    const [options, setOptions] = useState({
        language: 'EN',
        theme: 'light'
    });

    
    return (
        <OptionContext.Provider value={{options, setOptions}}>
            {children}
        </OptionContext.Provider>
    )
}