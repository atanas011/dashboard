import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'

import storeContext from '../context/storeContext'

const Admin = () => {

  const { store } = useContext(storeContext)

  return store.user.role === 'Admin' ? <Outlet /> : <Navigate to='/access-restricted' />
}

export default Admin
