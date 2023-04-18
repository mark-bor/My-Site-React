import { useReducer, createContext } from "react";



const defaultContent = {
	language: 'EN'
}

export const AppContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'changeLanguage': {
            return {
                ...state,
                language: action.language
            };
		}
    
        case 'reset': {
            return defaultContent;
		}
    
        default: {
            throw new Error('No action');
		}
    }
}

export function AppContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, defaultContent);
    // const value = {state, dispatch};

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
}

// export {
//     AppContext,
//     AppContextProvider
// }



// function setLanguage() {
// 	// Перевірити, чи вже є значення у локальному сховищі
// 	if (!localStorage.getItem('language')) {
// 		if (geolocation()){ } else { }
// 	} else { }
// };
