import { useReducer } from 'react'

import storeReducer from './storeReducer'
import storeContext from './storeContext'
import decodeToken from '../util/decodeToken'

const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(storeReducer, {
        user: decodeToken(localStorage.getItem('token')),
        token: localStorage.getItem('token') || ''
    })

    return <storeContext.Provider value={{ store, dispatch }}>{children}</storeContext.Provider>
}

export default StoreProvider
