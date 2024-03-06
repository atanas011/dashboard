import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './dashboard/pages/Login'
import Protected from './protected/Protected'
import Layout from './dashboard/components/Layout'
import Restricted from './dashboard/pages/Restricted'
import Admin from './protected/Admin'
import AdminIndex from './dashboard/pages/AdminIndex'
import NotFound from './dashboard/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />

        <Route path='/' element={<Protected />}>
          <Route path='' element={<Layout />}>

            <Route path='access-restricted' element={<Restricted />} />

            <Route element={<Admin />}>
              <Route path='admin' element={<AdminIndex />} />
            </Route>

          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
