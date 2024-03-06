import { Outlet, Navigate } from 'react-router-dom'

const Admin = () => {

  const user = { role: 'admin' } // user

  return (user.role === 'admin') ? <Outlet /> : <Navigate to='/access-restricted' />
}

export default Admin
