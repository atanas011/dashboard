import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {

  const user = {} // null

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default Protected
