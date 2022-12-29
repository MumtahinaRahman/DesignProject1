import { createContext, useReducer } from "react"

export const LessonsContext = createContext()

export const lessonsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_LESSONS':
            return {
                lessons: action.payload
            }
        case 'CREATE_LESSON':
            return {
                lessons: [action.payload, ...state.lessons]
            }

        default:
            return state                     
    }
}

export const LessonsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(lessonsReducer, {
        lessons: null
    })

    

    return (
        <LessonsContext.Provider value={{...state, dispatch}}>
            {children}
        </LessonsContext.Provider>
    )
}