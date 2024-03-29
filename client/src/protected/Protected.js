import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import storeContext from '../context/storeContext'

const Protected = () => {

  const { store } = useContext(storeContext)

  return store.user ? <Outlet /> : <Navigate to='/login' />
}

export default Protected
