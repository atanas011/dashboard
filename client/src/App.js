import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './dashboard/pages/Login'
import Protected from './protected/Protected'
import Layout from './dashboard/components/Layout'
import Panel from './dashboard/pages/Panel'
import News from './dashboard/pages/News'
import CreateNews from './dashboard/pages/CreateNews'
import Profile from './dashboard/pages/Profile'
import Restricted from './dashboard/pages/Restricted'
import Admin from './protected/Admin'
import Writers from './dashboard/pages/Writers'
import AddWriter from './dashboard/pages/AddWriter'
import NotFound from './dashboard/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />

        <Route path='/' element={<Protected />}>
          <Route path='' element={<Layout />}>

            <Route index element={<Panel />} />
            <Route path='news' element={<News />} />
            <Route path='news/create' element={<CreateNews />} />
            <Route path='profile' element={<Profile />} />
            <Route path='access-restricted' element={<Restricted />} />

            <Route element={<Admin />}>
              <Route path='writers' element={<Writers />} />
              <Route path='writers/add' element={<AddWriter />} />
            </Route>

          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
