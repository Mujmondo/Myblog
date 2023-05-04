const { createContext, useReducer, useEffect } = require("react");

export const authContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state            
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const User = JSON.parse(localStorage.getItem('user'))
        if(User){
            dispatch({type: 'LOGIN', payload: User})
        }
    }, []);

    console.log('AuthContext state: ', state)
    return (
        <authContext.Provider value={{...state, dispatch}}>
            {children}
        </authContext.Provider>
)

}